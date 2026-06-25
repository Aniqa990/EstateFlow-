from urllib.parse import urlparse

from fastapi import APIRouter

from app.config import get_settings
from app.db import supabase_connectivity_error

router = APIRouter(tags=["health"])


@router.get("/health")
async def health():
    """Public health check — use after deploy to confirm API + Supabase host."""
    settings = get_settings()
    host = urlparse(settings.supabase_url).hostname or ""
    db_error = supabase_connectivity_error()
    return {
        "status": "ok" if not db_error else "degraded",
        "service": "estateflow-api",
        "supabase_host": host,
        "supabase_reachable": db_error is None,
        **({"supabase_error": db_error} if db_error else {}),
    }
