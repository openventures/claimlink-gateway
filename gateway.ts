const PATH_REGEX = /^\/(?:([a-zA-Z0-9-]+)\/)?(\d+)$/;

function showError(msg: string) {
  document.getElementById("msg").textContent = msg;
}

const onLoad = () => {
  const path = window.location.pathname;
  if (!PATH_REGEX.test(path)) {
    return showError("Invalid link");
  }
  const parts = PATH_REGEX.exec(path);
  const chainID = parts[1] ?? "wax-mainnet";
  const linkID = parseInt(parts[2], 10);

  const urlParams = new URLSearchParams(location.search);

  const key = urlParams.get("key") ?? "";

  const target = `https://wax.atomichub.io/trading/link/${chainID}/${linkID}?key=${key}`;
  window.location.href = target;
};

document.addEventListener("DOMContentLoaded", onLoad);
