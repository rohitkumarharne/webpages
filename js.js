document.querySelectorAll(".asidbar a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".content").forEach((content) => {
        content.classList.remove("active");
      });
      const targetId = this.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });

  function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => (section.style.display = "none"));

    // Show the selected content section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = "block";
    }
  }