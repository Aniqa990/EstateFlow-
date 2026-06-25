import socket
from functools import lru_cache
from urllib.parse import urlparse

from supabase import Client, create_client

from app.config import get_settings


def supabase_connectivity_error() -> str | None:
    """Return a short error if SUPABASE_URL hostname cannot be resolved."""
    host = urlparse(get_settings().supabase_url).hostname
    if not host:
        return "SUPABASE_URL is missing or has no hostname"
    try:
        socket.getaddrinfo(host, 443)
    except OSError as exc:
        return (
            f"cannot resolve Supabase host '{host}' ({exc}). "
            "Check SUPABASE_URL in .env — the project may be deleted, paused, or mistyped."
        )
    return None


@lru_cache
def get_supabase_admin() -> Client:
    settings = get_settings()
    return create_client(settings.supabase_url, settings.supabase_service_role_key)


def get_supabase_for_token(access_token: str) -> Client:
    settings = get_settings()
    client = create_client(settings.supabase_url, settings.supabase_anon_key)
    client.postgrest.auth(access_token)
    return client
