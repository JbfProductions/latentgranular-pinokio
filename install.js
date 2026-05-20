module.exports = {
  run: [
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: "git clone https://huggingface.co/spaces/naotokui/latentgranular app"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "python -m pip install --upgrade pip setuptools wheel",
          "pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: "python - <<'PY'\nfrom pathlib import Path\nPath('launch.py').write_text(r'''\nimport os\nimport runpy\nimport gradio as gr\n\n_original_launch = gr.Blocks.launch\n\ndef _pinokio_launch(self, *args, **kwargs):\n    kwargs.setdefault('server_name', os.environ.get('GRADIO_SERVER_NAME', '127.0.0.1'))\n    kwargs.setdefault('server_port', int(os.environ.get('GRADIO_SERVER_PORT', os.environ.get('PORT', '7860'))))\n    return _original_launch(self, *args, **kwargs)\n\ngr.Blocks.launch = _pinokio_launch\nrunpy.run_path('app.py', run_name='__main__')\n''', encoding='utf-8')\nprint('Created app/launch.py')\nPY"
      }
    }
  ]
}
