let sucursales = document.querySelector("#sucursales").children;
let lastClick;

function handleMapClick(marker){
    if(!!lastClick){
        lastClick.setIcon("./media/pin-inactive.svg");
        sucursales[lastClick.index].classList.add("d-none");
    }
    marker.setIcon("./media/pin-active.svg");
    lastClick = marker;
    sucursales[marker.index].classList.remove("d-none");
}

function initMap() {
    const mapProp= {
        center: new google.maps.LatLng( -38.416097, -63.616672),
        zoom: 5
    };
    const map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    const newMarker = (props) =>{
        const marker = new google.maps.Marker({
            position: {lat: props.lat, lng: props.lng},
            map: map,
            icon: "./media/pin-inactive.svg",
            index: props.index
        })

        google.maps.event.addListener(marker, "click", () => {
            handleMapClick(marker);
            
        })
    }

    if(branches) branches.forEach((data, index) => {
        newMarker({lat: parseFloat(data.lat), lng: parseFloat(data.lng), index: index});
    })
}