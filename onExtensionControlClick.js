var container = $("#app-content > div > div > div");
var bannerHtml = $("<div class='anchor-placeholder-banner'></div>");
bannerHtml.append(
  '<img src="https://s.w.org/style/images/about/WordPress-logotype-simplified.png" />'
);
bannerHtml.append('<a class="btn" href="#">Get Started</a>');
bannerHtml.append("<h1>Create a site &amp; transcribe episodes</h1>");
bannerHtml.append(
  "<p>Increase your audience reach by creating a site with Wordpress.com.</p>"
);

if ($(".anchor-placeholder-banner").length) {
  $(".anchor-placeholder-banner").remove();
} else {
  container.prepend(bannerHtml);
}
