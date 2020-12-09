var SITE_ROOT = "http://calypso.localhost:3000";
var PODCAST_ID = "3e51070";
var EPISODE_ID = "e5f332f1-a347-40d9-a79b-ce30884057e5";
var SPOTIFY_URL =
  "https://open.spotify.com/show/6HTZdaDHjqXKDE4acYffoD?si=EVfDYETjQCu7pasVG5D73Q";
var path = window.location.pathname;

if (path.includes("/dashboard/episode/")) {
  handleEpisodePage();
}
if (path === "/dashboard") {
  handleDashboard();
}

function handleDashboard() {
  var url = `https://public-api.wordpress.com/wpcom/v2/anchor?podcast=${PODCAST_ID}&dev=true`;
  var container = $("#app-content > div > div > div");
  var bannerHtml = $("<div class='anchor-placeholder-banner'></div>");

  bannerHtml.append(
    '<img src="https://s.w.org/style/images/about/WordPress-logotype-simplified.png" />'
  );
  bannerHtml.append(
    `<a class="btn" href="${url}" target="_blank" rel="noopener noreferrer">Get Started</a>`
  );
  bannerHtml.append("<h1>Create a site &amp; transcribe episodes</h1>");
  bannerHtml.append(
    "<p>Increase your audience reach by creating a site with Wordpress.com.</p>"
  );

  if ($(".anchor-placeholder-banner").length) {
    $(".anchor-placeholder-banner").remove();
  } else {
    container.prepend(bannerHtml);
  }
}

function handleEpisodePage() {
  var url = `https://public-api.wordpress.com/wpcom/v2/anchor?podcast=${PODCAST_ID}&episode=${EPISODE_ID}&spotify_show_url=${encodeURIComponent(
    SPOTIFY_URL
  )}&dev=true`;
  var buttonRow = $(
    "#app-content > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)"
  );
  var tempControls = $('<div class="anchor-placeholder-controls"></div>');
  tempControls.append('<a href="#" class="btn">Share episode</a>');
  tempControls.append(
    `<a href="${url}" class="blog-post-link" target="_blank" rel="noopener noreferrer">Convert to blog post. <img src="https://s.w.org/style/images/about/WordPress-logotype-simplified.png" /></a>`
  );
  if ($(".anchor-placeholder-controls").length) {
    buttonRow.show();
    $(".anchor-placeholder-controls").remove();
  } else {
    buttonRow.hide();
    buttonRow.after(tempControls);
  }
}
