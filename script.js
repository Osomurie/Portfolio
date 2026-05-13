<script>
  const toggleBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
</script>