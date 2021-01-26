fetch(chrome.runtime.getURL("config.json")).then((response) => {
  response.json().then((data) => {
    run(data);
  });
});

function run(config) {
  var path = window.location.pathname;
  if (path.includes("/dashboard/episode/")) {
    handleEpisodePage(config);
  }
  if (path === "/dashboard") {
    handleDashboard(config);
  }
  if (path.includes("post.php") || path.includes("/home")) {
    handleOutgoingAnchorLinks(config);
  }
}

function handleDashboard(config) {
  const { PODCAST_ID, EPISODE_ID, SPOTIFY_SHOW_URL } = config;
  var url = `https://public-api.wordpress.com/wpcom/v2/anchor?podcast=${PODCAST_ID}&episode=${EPISODE_ID}&spotify_url=${SPOTIFY_SHOW_URL}&dev=true`;
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

function handleEpisodePage(config) {
  const { PODCAST_ID, EPISODE_ID, SPOTIFY_EPISODE_URL } = config;
  var url = `https://public-api.wordpress.com/wpcom/v2/anchor?podcast=${PODCAST_ID}&episode=${EPISODE_ID}&dev=true`;
  if (SPOTIFY_EPISODE_URL) {
    url += `&spotify_url=${encodeURIComponent(SPOTIFY_EPISODE_URL)}`;
  }
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

/*
 * On post-publish or calypso home page, modify all links with destination
 * "https://anchor.fm/wordpress" to be destination
 * "https://website-wordpress.anchor.fm/wordpress". Also adds " (anchor
 * staging)" to the link text, to make it obvious a change has occured.
 */
function handleOutgoingAnchorLinks(_config) {
  let links = [].filter.call(
    document.getElementsByTagName("a"),
    (elem) => elem.href == "https://anchor.fm/wordpress"
  );
  for (let link of links) {
    link.href = "https://website-wordpress.anchor.fm/wordpress";
    link.textContent += " (Anchor Staging)";
  }
}
