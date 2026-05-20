# NeuralSampling / LatentGranular Pinokio Launcher

This is a Pinokio launcher for the Hugging Face Space `naotokui/latentgranular`.

## Usage

1. Put these files in a GitHub repository, for example `latentgranular.pinokio`.
2. Open Pinokio and use **Download from URL** with your repository URL.
3. Click **Install**.
4. Click **Start**.
5. Use **Open Web UI** when it appears.

## Notes

- The upstream app is cloned from `https://huggingface.co/spaces/naotokui/latentgranular` into `app/`.
- Dependencies are installed from the upstream `requirements.txt` into a local `env` virtual environment.
- `launch.py` is generated during install to force Gradio to bind to Pinokio's selected local port.
- If installation fails around PyTorch on your platform, install a platform-specific PyTorch build in `env` and rerun Install or Update.
