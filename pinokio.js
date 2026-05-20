module.exports = {
  version: "7.0",
  title: "NeuralSampling / LatentGranular",
  description: "Local Pinokio launcher for naotokui/latentgranular.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    const installed = info.exists("env") && info.exists("app/app.py")
    const running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) return [{ default: true, icon: "fa-solid fa-plug", text: "Installing", href: "install.js" }]
    if (installed) {
      if (running.start) {
        const local = info.local("start.js")
        if (local && local.url) {
          return [
            { default: true, icon: "fa-solid fa-rocket", text: "Open Local Web UI", href: local.url },
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.js" }
          ]
        }
        return [{ default: true, icon: "fa-solid fa-terminal", text: "Terminal", href: "start.js" }]
      }
      if (running.update) return [{ default: true, icon: "fa-solid fa-terminal", text: "Updating", href: "update.js" }]
      if (running.reset) return [{ default: true, icon: "fa-solid fa-terminal", text: "Resetting", href: "reset.js" }]
      return [
        { default: true, icon: "fa-solid fa-power-off", text: "Start Local App", href: "start.js" },
        { icon: "fa-solid fa-rotate", text: "Update", href: "update.js" },
        { icon: "fa-solid fa-plug", text: "Reinstall", href: "install.js" },
        { icon: "fa-regular fa-circle-xmark", text: "Reset", href: "reset.js" },
        { icon: "fa-brands fa-git-alt", text: "Original Hugging Face Space", href: "https://huggingface.co/spaces/naotokui/latentgranular" }
      ]
    }
    return [
      { default: true, icon: "fa-solid fa-plug", text: "Install Local App", href: "install.js" },
      { icon: "fa-brands fa-git-alt", text: "Original Hugging Face Space", href: "https://huggingface.co/spaces/naotokui/latentgranular" }
    ]
  }
}
