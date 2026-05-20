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
    }
  ]
}
