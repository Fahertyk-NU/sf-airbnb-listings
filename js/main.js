function MainModule(listingsID = "#listings") {
  const me = {};


  const listingsElement = document.querySelector(listingsID);

  function getListingCode(listing) {
    return `<div class="col-4">
  <div class="img-container">
    <a href="https://www.openstreetmap.org/?mlat=${listing.latitude}&mlon=${listing.longitude}&zoom=14" target="_blank">
      <img 
        src="${listing.picture_url}" 
        onerror="this.src='https://placehold.co/400x300/cccccc/666666?text=No+Image+Available'"
        class="card-img-top" 
        alt="AirBNB Listing" />
    </a>
    <div class="map-overlay">📍 View on map</div>
  </div>
    <div class="card-body">
      <h3 class="card-title">${listing.name}</h3>
      <div class="fs-4">${listing.price}</div>
      <div class="d-flex align-items-center gap-2">
      <img src="${listing.host_picture_url}" class="rounded-circle" alt="Host Picture" width="40"/>
      <span>${listing.host_name}</span>
      </div>
      <p class="card-text">
      ${listing.description}
      </p>
      <div class="mb-2">
      ${JSON.parse(listing.amenities).slice(0, 5).map(a => `<span class="badge rounded-pill text-bg-dark">${a}</span>`).join(" ")}
      </div>
      <a href="${listing.listing_url}" class="btn btn-primary">Go to Listing</a>
    </div>
  </div>
  <!-- /card -->
  </div>

  `;
  }

  function redraw(listings) {
    listingsElement.innerHTML = "";
    // for (let i = 0; i < listings.length; i++) {
    //   listingsElement.innerHTML += getListingCode(listings[i]);
    // }

    // for (let listing of listings) {
    //   console.log("listing", listing );
    //   listingsElement.innerHTML += getListingCode(listing);
    // }

    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();


    me.redraw(listings.slice(0, 50));
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();


main.loadData();