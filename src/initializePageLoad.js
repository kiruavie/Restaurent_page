export const initializePage = () => {
  const contentDiv = document.getElementById("content");

  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.innerHTML = `<button>Home</button><button>Menu</button><button>About</button>`;

  // Instead of creating a new div with the same ID, you can reuse the existing one
  // Remove this line: const emptyContentDiv = document.createElement("div");
  // Instead, clear the content of the existing contentDiv
  contentDiv.innerHTML = "";

  // No need to add emptyContentDiv, as it's unnecessary to have two divs with the same ID
  contentDiv.appendChild(header);
  contentDiv.appendChild(nav);
};
