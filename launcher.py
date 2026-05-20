import os
import runpy
import sys
from pathlib import Path

root = Path(__file__).resolve().parent
app_dir = root / "app"
if not (app_dir / "app.py").exists():
    raise FileNotFoundError("app/app.py wurde nicht gefunden. Bitte zuerst Install ausführen.")

os.chdir(app_dir)
sys.path.insert(0, str(app_dir))

import gradio as gr

_original_launch = gr.Blocks.launch

def _pinokio_launch(self, *args, **kwargs):
    kwargs.setdefault("server_name", os.environ.get("GRADIO_SERVER_NAME", "127.0.0.1"))
    kwargs.setdefault("server_port", int(os.environ.get("GRADIO_SERVER_PORT", os.environ.get("PORT", "7860"))))
    kwargs.setdefault("inbrowser", False)
    return _original_launch(self, *args, **kwargs)

gr.Blocks.launch = _pinokio_launch
runpy.run_path("app.py", run_name="__main__")
