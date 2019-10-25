mapboxgl.accessToken = 'pk.eyJ1IjoiamthcnJpazQiLCJhIjoiY2sxZHBidzhiMDFzMzNibjFtNjFhdm45cSJ9.9cofmq50T-5dltNuf1L5iQ';
// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v10',
  // initial position in [lon, lat] format
  center: [-80.8431, 35.2271],
  // initial zoom
  zoom: 9
});


var schools = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.834189,35.219422 ]
    },
    "properties": {
    "Title":"Community Charter School",
    "Image":"none",
    "Address":"510 South Torrence Street"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.835749,35.390651 ]
    },
    "properties": {
    "Title":"Lake Norman Charter",
    "Image":"none",
    "Address":"12435 Old Statesville Road"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.797545,35.257679 ]
    },
    "properties": {
    "Title":"Sugar Creek Charter",
    "Image":"none",
    "Address":"4101 N Tryon Street"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.88592,35.168645 ]
    },
    "properties": {
    "Title":"Metrolina Reg Scholars Academy",
    "Image":"none",
    "Address":"5225 Seventy-seven Center Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.662061,35.16588 ]
    },
    "properties": {
    "Title":"Queen's Grant Community School",
    "Image":"none",
    "Address":"6400 Matthews Mint Hill Road"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.859593,35.501804 ]
    },
    "properties": {
    "Title":"Community School of Davidson",
    "Image":"none",
    "Address":"404 Armour Street"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.72885,35.072886 ]
    },
    "properties": {
    "Title":"Socrates Academy",
    "Image":"none",
    "Address":"3909 Weddington Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.767033,35.250641 ]
    },
    "properties": {
    "Title":"KIPP Charlotte",
    "Image":"none",
    "Address":"931 Wilann Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.751045,35.155052 ]
    },
    "properties": {
    "Title":"Charlotte Secondary",
    "Image":"none",
    "Address":"8601 McAlpine Park Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.75652,35.322945 ]
    },
    "properties": {
    "Title":"Corvian Community School",
    "Image":"none",
    "Address":"9501 David Taylor Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.870974,35.225632 ]
    },
    "properties": {
    "Title":"Invest Collegiate Transform",
    "Image":"none",
    "Address":"2045 Suttle Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.736451,35.23527 ]
    },
    "properties": {
    "Title":"Charlotte Choice Charter",
    "Image":"none",
    "Address":"3118 Milton Road"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.952731,35.3051 ]
    },
    "properties": {
    "Title":"Aristotle Preparatory Academy",
    "Image":"none",
    "Address":"8101 Fallsdale Drive"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.719291,35.34506 ]
    },
    "properties": {
    "Title":"Bradford Preparatory School",
    "Image":"none",
    "Address":"2502 Salome Church Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.798801,35.20586 ]
    },
    "properties": {
    "Title":"Charlotte Learning Academy",
    "Image":"none",
    "Address":"800 Briar Creek Rd."
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.822591,35.34828 ]
    },
    "properties": {
    "Title":"Pioneer Springs Community School",
    "Image":"none",
    "Address":"9300 Bob Beatty Rd."
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.727958,35.30007 ]
    },
    "properties": {
    "Title":"United Community School",
    "Image":"none",
    "Address":"1406 Suther Road"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.843621,35.45164 ]
    },
    "properties": {
    "Title":"Thunderbird Preparatory Academy",
    "Image":"none",
    "Address":"17609 Old Statesville Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.885543,35.236459 ]
    },
    "properties": {
    "Title":"Stewart Creek High",
    "Image":"none",
    "Address":"2701-F Freedom Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.758581,35.20971 ]
    },
    "properties": {
    "Title":"Commonwealth High",
    "Image":"none",
    "Address":"5112 Central Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.834801,35.22912 ]
    },
    "properties": {
    "Title":"Charlotte Lab School",
    "Image":"none",
    "Address":"301 E 9th Street"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.775761,35.32318 ]
    },
    "properties": {
    "Title":"Queen City STEM School",
    "Image":"none",
    "Address":"8701 Mallard Creek Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.821421,35.25203 ]
    },
    "properties": {
    "Title":"VERITAS Community School CFA",
    "Image":"none",
    "Address":"2600 Grimes Street"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.678875,35.109514 ]
    },
    "properties": {
    "Title":"Matthews Charter Academy",
    "Image":"none",
    "Address":"2332 Mount Harmony Church Rd."
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.922561,35.14281 ]
    },
    "properties": {
    "Title":"Unity Classical Charter",
    "Image":"none",
    "Address":"1929 W Arrowood Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.797061,35.36674 ]
    },
    "properties": {
    "Title":"Mallard Creek STEM Academy",
    "Image":"none",
    "Address":"9142 Browne Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.884841,35.23708 ]
    },
    "properties": {
    "Title":"Movement Charter School",
    "Image":"none",
    "Address":"2701-B  Freedom Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.773461,35.26116 ]
    },
    "properties": {
    "Title":"UpROAR Leadership Academy",
    "Image":"none",
    "Address":"5500 North Tryon St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.978781,35.33705 ]
    },
    "properties": {
    "Title":"East Voyager Academy",
    "Image":"none",
    "Address":"11644 Clingman Lane"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.938601,35.26123 ]
    },
    "properties": {
    "Title":"Mountain Island Day School",
    "Image":"none",
    "Address":"1209 Little Rock Road"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.971669,35.115218 ]
    },
    "properties": {
    "Title":"Lake Wylie Elementary",
    "Image":"none",
    "Address":"13620 Erwin Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.799037,35.090597 ]
    },
    "properties": {
    "Title":"South Charlotte Middle",
    "Image":"none",
    "Address":"8040 Strawberry Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.714456,35.31548 ]
    },
    "properties": {
    "Title":"University Meadows Elementary",
    "Image":"none",
    "Address":"1600 Pavilion Blvd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.850052,35.237483 ]
    },
    "properties": {
    "Title":"Irwin Academic Center",
    "Image":"none",
    "Address":"329 N. Irwin Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.715017,35.159931 ]
    },
    "properties": {
    "Title":"Crown Point Elementary",
    "Image":"none",
    "Address":"3335 Sam Newell Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.800925,35.336844 ]
    },
    "properties": {
    "Title":"David Cox Road Elementary",
    "Image":"none",
    "Address":"4215 David Cox Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.950755,35.273766 ]
    },
    "properties": {
    "Title":"Turning Point Academy",
    "Image":"none",
    "Address":"8701 Moores Chapel Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.851186,35.110727 ]
    },
    "properties": {
    "Title":"Smithfield Elementary",
    "Image":"none",
    "Address":"3200 Smithfield Church Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.729512,35.197057 ]
    },
    "properties": {
    "Title":"Albemarle Road Elementary",
    "Image":"none",
    "Address":"7800 Riding Trail Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.729013,35.198649 ]
    },
    "properties": {
    "Title":"Albemarle Road Middle",
    "Image":"none",
    "Address":"6900 Democracy Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.832716,35.1667 ]
    },
    "properties": {
    "Title":"Alexander Graham Middle",
    "Image":"none",
    "Address":"1800 Runnymede Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.838144,35.376721 ]
    },
    "properties": {
    "Title":"J M Alexander Middle",
    "Image":"none",
    "Address":"12010 Hambright Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.91503,35.261753 ]
    },
    "properties": {
    "Title":"Allenbrook Elementary",
    "Image":"none",
    "Address":"1430 Allenbrook Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.890678,35.232655 ]
    },
    "properties": {
    "Title":"Ashley Park PreK-8 School",
    "Image":"none",
    "Address":"2401 Belfast Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.648406,35.17497 ]
    },
    "properties": {
    "Title":"Bain Elementary",
    "Image":"none",
    "Address":"11540 Bain School Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.888822,35.210389 ]
    },
    "properties": {
    "Title":"Barringer Academic Center",
    "Image":"none",
    "Address":"1546 Walton Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.990472,35.212826 ]
    },
    "properties": {
    "Title":"Berryhill School",
    "Image":"none",
    "Address":"10501 Windy Grove Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.836803,35.13142 ]
    },
    "properties": {
    "Title":"Beverly Woods Elementary",
    "Image":"none",
    "Address":"6001 Quail Hollow Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.765664,35.252048 ]
    },
    "properties": {
    "Title":"Briarwood Elementary",
    "Image":"none",
    "Address":"1001 Wilann Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.804439,35.128885 ]
    },
    "properties": {
    "Title":"Carmel Middle",
    "Image":"none",
    "Address":"5001 Camilla Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.809579,35.19641 ]
    },
    "properties": {
    "Title":"Billingsville Elementary",
    "Image":"none",
    "Address":"124 Skyland Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.625159,35.223754 ]
    },
    "properties": {
    "Title":"Clear Creek Elementary",
    "Image":"none",
    "Address":"13501 Albemarle Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.750138,35.246492 ]
    },
    "properties": {
    "Title":"Cochrane Collegiate Academy",
    "Image":"none",
    "Address":"6200 Starhaven Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.871463,35.184731 ]
    },
    "properties": {
    "Title":"Collinswood Language Academy",
    "Image":"none",
    "Address":"4000 Applegate Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.864216,35.48172 ]
    },
    "properties": {
    "Title":"Cornelius Elementary",
    "Image":"none",
    "Address":"21126 Catawba Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.797578,35.179268 ]
    },
    "properties": {
    "Title":"Cotswold Elementary",
    "Image":"none",
    "Address":"300 Greenwich Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.944674,35.303869 ]
    },
    "properties": {
    "Title":"Coulwood STEM Academy",
    "Image":"none",
    "Address":"500 Kentberry Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.8484,35.489791 ]
    },
    "properties": {
    "Title":"Davidson Elementary",
    "Image":"none",
    "Address":"635 South St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.745969,35.245108 ]
    },
    "properties": {
    "Title":"Devonshire Elementary",
    "Image":"none",
    "Address":"6500 Barrington Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.8323,35.2291 ]
    },
    "properties": {
    "Title":"First Ward Creative Arts Acad",
    "Image":"none",
    "Address":"715 N. Caldwell St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.905386,35.204978 ]
    },
    "properties": {
    "Title":"Reid Park Academy",
    "Image":"none",
    "Address":"4108 W Tyvola Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.824346,35.257307 ]
    },
    "properties": {
    "Title":"Druid Hills Academy",
    "Image":"none",
    "Address":"2801 Lucena Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.757978,35.176007 ]
    },
    "properties": {
    "Title":"East Mecklenburg High",
    "Image":"none",
    "Address":"6800 Monroe Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.821652,35.196611 ]
    },
    "properties": {
    "Title":"Eastover Elementary",
    "Image":"none",
    "Address":"500 Cherokee Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.778091,35.210204 ]
    },
    "properties": {
    "Title":"Eastway Middle",
    "Image":"none",
    "Address":"1501 Norland Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.825433,35.215382 ]
    },
    "properties": {
    "Title":"Elizabeth Traditional Elem",
    "Image":"none",
    "Address":"1601 Park Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.902644,35.23659 ]
    },
    "properties": {
    "Title":"Harding University High",
    "Image":"none",
    "Address":"2001 Alleghany St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.719825,35.226343 ]
    },
    "properties": {
    "Title":"Hickory Grove Elementary",
    "Image":"none",
    "Address":"6709 Pence Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.784728,35.268056 ]
    },
    "properties": {
    "Title":"Hidden Valley Elementary",
    "Image":"none",
    "Address":"5100 Snow White Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.803206,35.255641 ]
    },
    "properties": {
    "Title":"Highland Renaissance Academy",
    "Image":"none",
    "Address":"125 W Craighead Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.846933,35.411572 ]
    },
    "properties": {
    "Title":"Huntersville Elementary",
    "Image":"none",
    "Address":"200 Gilead Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.85987,35.132706 ]
    },
    "properties": {
    "Title":"Huntingtowne Farms Elementary",
    "Image":"none",
    "Address":"2520 Huntingtowne Farms Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.744159,35.187135 ]
    },
    "properties": {
    "Title":"Idlewild Elementary",
    "Image":"none",
    "Address":"7101 Idlewild Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.687432,35.197168 ]
    },
    "properties": {
    "Title":"Independence High",
    "Image":"none",
    "Address":"1967 Patriot Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.685407,35.21602 ]
    },
    "properties": {
    "Title":"J H Gunn Elementary",
    "Image":"none",
    "Address":"7400 Harrisburg Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.955732,35.153501 ]
    },
    "properties": {
    "Title":"Kennedy Middle",
    "Image":"none",
    "Address":"4000 Gallant Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.782308,35.143272 ]
    },
    "properties": {
    "Title":"Lansdowne Elementary",
    "Image":"none",
    "Address":"6400 Prett Ct"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.889591,35.350911 ]
    },
    "properties": {
    "Title":"Long Creek Elementary",
    "Image":"none",
    "Address":"9213-A Beatties Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.723443,35.113195 ]
    },
    "properties": {
    "Title":"Matthews Elementary",
    "Image":"none",
    "Address":"200 McDowell Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.767116,35.180983 ]
    },
    "properties": {
    "Title":"McClintock Middle",
    "Image":"none",
    "Address":"1925 Rama Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.841304,35.2182 ]
    },
    "properties": {
    "Title":"Metro School",
    "Image":"none",
    "Address":"405 S. Davidson St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.867255,35.15225 ]
    },
    "properties": {
    "Title":"Montclaire Elementary",
    "Image":"none",
    "Address":"5801 Farmbrook Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.833367,35.170784 ]
    },
    "properties": {
    "Title":"Myers Park High",
    "Image":"none",
    "Address":"2400 Colony Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.83449,35.190189 ]
    },
    "properties": {
    "Title":"Myers Park Traditional",
    "Image":"none",
    "Address":"2132 Radcliffe Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.900221,35.154888 ]
    },
    "properties": {
    "Title":"Nations Ford Elementary",
    "Image":"none",
    "Address":"7050 Nations Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.753691,35.286611 ]
    },
    "properties": {
    "Title":"Newell Elementary",
    "Image":"none",
    "Address":"325 Rocky River Road West"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.834877,35.372678 ]
    },
    "properties": {
    "Title":"North Mecklenburg High",
    "Image":"none",
    "Address":"11201 Old Statesville Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.691777,35.198073 ]
    },
    "properties": {
    "Title":"Northeast Middle",
    "Image":"none",
    "Address":"5960 Brickstone Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.856677,35.257129 ]
    },
    "properties": {
    "Title":"Northwest School of the Arts",
    "Image":"none",
    "Address":"1415 Beatties Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.896938,35.300692 ]
    },
    "properties": {
    "Title":"Oakdale Elementary",
    "Image":"none",
    "Address":"1825 Oakdale Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.864943,35.239101 ]
    },
    "properties": {
    "Title":"Bruns Academy",
    "Image":"none",
    "Address":"501 S. Bruns Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.798773,35.110635 ]
    },
    "properties": {
    "Title":"Olde Providence Elementary",
    "Image":"none",
    "Address":"3800 Rea Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.848753,35.17753 ]
    },
    "properties": {
    "Title":"Park Road Montessori",
    "Image":"none",
    "Address":"3701 Haven Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.945218,35.291096 ]
    },
    "properties": {
    "Title":"Paw Creek Elementary",
    "Image":"none",
    "Address":"1300 Cathey Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.823905,35.223209 ]
    },
    "properties": {
    "Title":"Piedmont IB Middle",
    "Image":"none",
    "Address":"1241 E 10th St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.889505,35.081481 ]
    },
    "properties": {
    "Title":"Pineville Elementary",
    "Image":"none",
    "Address":"204 Lowery St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.864008,35.166169 ]
    },
    "properties": {
    "Title":"Pinewood Elementary",
    "Image":"none",
    "Address":"805 Seneca Pl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.731053,35.173065 ]
    },
    "properties": {
    "Title":"Piney Grove Elementary",
    "Image":"none",
    "Address":"8801 Eaglewind Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.854653,35.113917 ]
    },
    "properties": {
    "Title":"Quail Hollow Middle",
    "Image":"none",
    "Address":"2901 Smithfield Church Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.772267,35.1697 ]
    },
    "properties": {
    "Title":"Rama Road Elementary",
    "Image":"none",
    "Address":"1035 Rama Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.794571,35.184168 ]
    },
    "properties": {
    "Title":"Randolph Middle",
    "Image":"none",
    "Address":"4400 Water Oak Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.838885,35.300334 ]
    },
    "properties": {
    "Title":"Ranson Middle",
    "Image":"none",
    "Address":"5850 Statesville Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.863432,35.190272 ]
    },
    "properties": {
    "Title":"Sedgefield Elementary",
    "Image":"none",
    "Address":"715 Hartford Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.855862,35.196755 ]
    },
    "properties": {
    "Title":"Sedgefield Middle",
    "Image":"none",
    "Address":"2700 Dorchester Pl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.834754,35.167758 ]
    },
    "properties": {
    "Title":"Selwyn Elementary",
    "Image":"none",
    "Address":"2840 Colony Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.788375,35.234012 ]
    },
    "properties": {
    "Title":"Shamrock Gardens Elementary",
    "Image":"none",
    "Address":"3301 Country Club Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.817467,35.152964 ]
    },
    "properties": {
    "Title":"Sharon Elementary",
    "Image":"none",
    "Address":"4330 Foxcroft Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.900227,35.155297 ]
    },
    "properties": {
    "Title":"Waddell Language Academy",
    "Image":"none",
    "Address":"7030 Nations Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.860978,35.109355 ]
    },
    "properties": {
    "Title":"South Mecklenburg High",
    "Image":"none",
    "Address":"8900 Park Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.847521,35.29595 ]
    },
    "properties": {
    "Title":"Statesville Road Elementary",
    "Image":"none",
    "Address":"5521 Milhaven Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.955747,35.1569 ]
    },
    "properties": {
    "Title":"Steele Creek Elementary",
    "Image":"none",
    "Address":"4100 Gallant Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.884933,35.107305 ]
    },
    "properties": {
    "Title":"Sterling Elementary",
    "Image":"none",
    "Address":"9601 China Grove Church Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.898698,35.25466 ]
    },
    "properties": {
    "Title":"Thomasboro Academy",
    "Image":"none",
    "Address":"538 Bradford Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.942031,35.249533 ]
    },
    "properties": {
    "Title":"Tuckaseegee Elementary",
    "Image":"none",
    "Address":"2028 Little Rock Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.858453,35.265404 ]
    },
    "properties": {
    "Title":"West Charlotte High",
    "Image":"none",
    "Address":"2219 Senior Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.952017,35.24792 ]
    },
    "properties": {
    "Title":"West Mecklenburg High",
    "Image":"none",
    "Address":"7400 Tuckaseegee Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.911481,35.231917 ]
    },
    "properties": {
    "Title":"Westerly Hills Academy",
    "Image":"none",
    "Address":"4420 Denver Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.759942,35.223185 ]
    },
    "properties": {
    "Title":"Windsor Park Elementary",
    "Image":"none",
    "Address":"3910 Sudbury Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.766988,35.208021 ]
    },
    "properties": {
    "Title":"Winterfield Elementary",
    "Image":"none",
    "Address":"3100 Winterfield Pl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.74606,35.157394 ]
    },
    "properties": {
    "Title":"Greenway Park Elementary",
    "Image":"none",
    "Address":"8301 Monroe Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.828575,35.306431 ]
    },
    "properties": {
    "Title":"Winding Springs Elementary",
    "Image":"none",
    "Address":"6601 Horace Mann Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.747406,35.112579 ]
    },
    "properties": {
    "Title":"Elizabeth Lane Elem",
    "Image":"none",
    "Address":"121 Elizabeth Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.774752,35.298736 ]
    },
    "properties": {
    "Title":"Nathaniel Alexander Elementary",
    "Image":"none",
    "Address":"7910 Neal Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.730709,35.259771 ]
    },
    "properties": {
    "Title":"Northridge Middle",
    "Image":"none",
    "Address":"7601 The Plaza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.859241,35.260804 ]
    },
    "properties": {
    "Title":"University Park Creative Arts",
    "Image":"none",
    "Address":"2400 Hildebrand St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.828071,35.081844 ]
    },
    "properties": {
    "Title":"McAlpine Elementary",
    "Image":"none",
    "Address":"9100 Carswell Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.783023,35.218293 ]
    },
    "properties": {
    "Title":"Merry Oaks International Academy",
    "Image":"none",
    "Address":"3508 Draper Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.811975,35.216579 ]
    },
    "properties": {
    "Title":"Lincoln Heights Academy",
    "Image":"none",
    "Address":"1900 Newcastle St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.684327,35.260209 ]
    },
    "properties": {
    "Title":"Reedy Creek Elementary",
    "Image":"none",
    "Address":"10801 Plaza Rd Ext"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.774512,35.335392 ]
    },
    "properties": {
    "Title":"Mallard Creek Elementary",
    "Image":"none",
    "Address":"9801 Mallard Creek Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.754791,35.068284 ]
    },
    "properties": {
    "Title":"McKee Road Elementary",
    "Image":"none",
    "Address":"4101 McKee Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.763887,35.110344 ]
    },
    "properties": {
    "Title":"Providence High",
    "Image":"none",
    "Address":"1800 Pineville-Matthews Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.808895,35.220508 ]
    },
    "properties": {
    "Title":"Hawthorne High",
    "Image":"none",
    "Address":"1411 Hawthorne Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.689629,35.184109 ]
    },
    "properties": {
    "Title":"Lebanon Road Elementary",
    "Image":"none",
    "Address":"7300 Lebanon Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.865231,35.324705 ]
    },
    "properties": {
    "Title":"Hornets Nest Elementary",
    "Image":"none",
    "Address":"6700 Beatties Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.691593,35.120282 ]
    },
    "properties": {
    "Title":"Butler High",
    "Image":"none",
    "Address":"1810 Matthews-Mint Hill Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.766922,35.298439 ]
    },
    "properties": {
    "Title":"James Martin Middle",
    "Image":"none",
    "Address":"6301 University Pointe Blvd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.769214,35.300403 ]
    },
    "properties": {
    "Title":"Vance High",
    "Image":"none",
    "Address":"7600 IBM Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.718054,35.128716 ]
    },
    "properties": {
    "Title":"Crestdale Middle",
    "Image":"none",
    "Address":"940 Sam Newell Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.924644,35.396738 ]
    },
    "properties": {
    "Title":"Francis Bradley Middle",
    "Image":"none",
    "Address":"13345 Beatties Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.775137,35.296698 ]
    },
    "properties": {
    "Title":"Morehead STEM Academy",
    "Image":"none",
    "Address":"7810 Neal Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.835292,35.376415 ]
    },
    "properties": {
    "Title":"Blythe Elementary",
    "Image":"none",
    "Address":"12202 Hambright Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.825258,35.043456 ]
    },
    "properties": {
    "Title":"Hawk Ridge Elementary",
    "Image":"none",
    "Address":"9201 Bryant Farms Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.911004,35.378392 ]
    },
    "properties": {
    "Title":"Hopewell High",
    "Image":"none",
    "Address":"11530 Beatties Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.804246,35.243229 ]
    },
    "properties": {
    "Title":"Highland Mill Montessori",
    "Image":"none",
    "Address":"3201 Clemson Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.783486,35.063078 ]
    },
    "properties": {
    "Title":"Jay M Robinson Middle",
    "Image":"none",
    "Address":"5925 Ballantyne Commons Pkwy"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.928453,35.308039 ]
    },
    "properties": {
    "Title":"Mountain Island Lake Academy",
    "Image":"none",
    "Address":"7905 Pleasant Grove Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.891683,35.239231 ]
    },
    "properties": {
    "Title":"Phillip O Berry Academy of Technology",
    "Image":"none",
    "Address":"1430 Alleghany St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.769808,35.072778 ]
    },
    "properties": {
    "Title":"Providence Spring Elementary",
    "Image":"none",
    "Address":"10045 Providence Church Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.84139,35.244018 ]
    },
    "properties": {
    "Title":"Walter G Byers School",
    "Image":"none",
    "Address":"1415 Hamilton St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.835647,35.066911 ]
    },
    "properties": {
    "Title":"Endhaven Elementary",
    "Image":"none",
    "Address":"6815 Endhaven Ln"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.725387,35.267379 ]
    },
    "properties": {
    "Title":"Joseph W Grier Academy",
    "Image":"none",
    "Address":"8330 Grier Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.69848,35.153045 ]
    },
    "properties": {
    "Title":"Mint Hill Middle",
    "Image":"none",
    "Address":"11501 Idewild Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.990741,35.107185 ]
    },
    "properties": {
    "Title":"Southwest Middle School",
    "Image":"none",
    "Address":"13624 Steele Creek Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.850261,35.251225 ]
    },
    "properties": {
    "Title":"Oaklawn Language Academy",
    "Image":"none",
    "Address":"1810 Oaklawn Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.800349,35.207741 ]
    },
    "properties": {
    "Title":"Chantilly Montessori",
    "Image":"none",
    "Address":"701 Briar Creek Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.823957,35.036092 ]
    },
    "properties": {
    "Title":"Community House Middle",
    "Image":"none",
    "Address":"9500 Community House Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.778459,35.263388 ]
    },
    "properties": {
    "Title":"Martin Luther King Jr Middle",
    "Image":"none",
    "Address":"500 Bilmark Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.872686,35.41215 ]
    },
    "properties": {
    "Title":"Torrence Creek Elementary",
    "Image":"none",
    "Address":"14550 Ranson Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.77001,35.36517 ]
    },
    "properties": {
    "Title":"Mallard Creek High",
    "Image":"none",
    "Address":"3825 Johnston Oehler Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.843144,35.022986 ]
    },
    "properties": {
    "Title":"Elon Park Elementary",
    "Image":"none",
    "Address":"11425 Ardrey Kell Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.952934,35.158302 ]
    },
    "properties": {
    "Title":"Olympic TEAM High School",
    "Image":"none",
    "Address":"4301 Sandy Porter Rd    Suite"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.795681,35.29507 ]
    },
    "properties": {
    "Title":"Performance Learning Center",
    "Image":"none",
    "Address":"2300 W Sugar Creek Road"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.952408,35.15786 ]
    },
    "properties": {
    "Title":"Olympic High - Renaissance School",
    "Image":"none",
    "Address":"4301 Sandy Porter Rd   Suite D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -81.000545,35.130809 ]
    },
    "properties": {
    "Title":"Winget Park Elementary",
    "Image":"none",
    "Address":"12235 Winget Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.837951,35.467451 ]
    },
    "properties": {
    "Title":"Bailey Middle",
    "Image":"none",
    "Address":"11900 Bailey Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.763331,35.378279 ]
    },
    "properties": {
    "Title":"Highland Creek Elementary",
    "Image":"none",
    "Address":"7242 Highland Creek Pkwy"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.952938,35.158286 ]
    },
    "properties": {
    "Title":"Olympic High-Math Eng Tech Science",
    "Image":"none",
    "Address":"4301 Sandy Porter Rd    Suite"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.868005,35.466507 ]
    },
    "properties": {
    "Title":"J.V. Washam Elementary",
    "Image":"none",
    "Address":"9611 Westmoreland Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.952951,35.158209 ]
    },
    "properties": {
    "Title":"Olympic High-Leadership and Development",
    "Image":"none",
    "Address":"4301 Sandy Porter Rd   Suite C"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.952922,35.158211 ]
    },
    "properties": {
    "Title":"Olympic High - Biotech Health Pub Admin",
    "Image":"none",
    "Address":"4301 Sandy Porter Rd   Suite E"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.82665,35.02999 ]
    },
    "properties": {
    "Title":"Ardrey Kell High",
    "Image":"none",
    "Address":"10220 Ardrey Kell Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.731168,35.264861 ]
    },
    "properties": {
    "Title":"Cato Middle College High",
    "Image":"none",
    "Address":"8120 Grier Rd   Suite 171-B"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.992551,35.28323 ]
    },
    "properties": {
    "Title":"Whitewater Academy",
    "Image":"none",
    "Address":"11600 White Rapids Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.92486,35.399842 ]
    },
    "properties": {
    "Title":"Barnette Elementary",
    "Image":"none",
    "Address":"13659 Beatties Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.856135,35.037387 ]
    },
    "properties": {
    "Title":"Ballantyne Elementary",
    "Image":"none",
    "Address":"15425 Scholastic Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.795134,35.046855 ]
    },
    "properties": {
    "Title":"Polo Ridge Elementary",
    "Image":"none",
    "Address":"11830 Tom Short Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.804651,35.346489 ]
    },
    "properties": {
    "Title":"Croft Community Elementary",
    "Image":"none",
    "Address":"4911 Hucks Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.814761,35.22846 ]
    },
    "properties": {
    "Title":"Military and Global Leadership Academy",
    "Image":"none",
    "Address":"1411 Hawthorne Lane Ste A"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.97883,35.173896 ]
    },
    "properties": {
    "Title":"Berewick Elementary",
    "Image":"none",
    "Address":"5910 Dixie River Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.762653,35.376236 ]
    },
    "properties": {
    "Title":"Ridge Road Middle",
    "Image":"none",
    "Address":"7260 Highland Creek Pkwy"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.977235,35.087492 ]
    },
    "properties": {
    "Title":"River Gate Elementary",
    "Image":"none",
    "Address":"15340 Smith Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.978597,35.308338 ]
    },
    "properties": {
    "Title":"River Oaks Academy",
    "Image":"none",
    "Address":"1015 Mt Holly-Huntersville Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.725308,35.348296 ]
    },
    "properties": {
    "Title":"Stoney Creek Elementary",
    "Image":"none",
    "Address":"14015 Mallard Roost Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.992551,35.28323 ]
    },
    "properties": {
    "Title":"Whitewater Middle",
    "Image":"none",
    "Address":"10201 Running Rapids Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.851566,35.211384 ]
    },
    "properties": {
    "Title":"Dilworth Elementary",
    "Image":"none",
    "Address":"405 E. Park Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.640044,35.214252 ]
    },
    "properties": {
    "Title":"Rocky River High",
    "Image":"none",
    "Address":"10505 Clear Creek Commerce Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.827491,35.46729 ]
    },
    "properties": {
    "Title":"William Amos Hough High",
    "Image":"none",
    "Address":"12420 Bailey Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.782875,35.241087 ]
    },
    "properties": {
    "Title":"Garinger High",
    "Image":"none",
    "Address":"1100 Eastway Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.87198,35.426503 ]
    },
    "properties": {
    "Title":"Grand Oak Elementary",
    "Image":"none",
    "Address":"15410 Stumptown Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -81.02592,35.093561 ]
    },
    "properties": {
    "Title":"Palisades Park Elementary",
    "Image":"none",
    "Address":"15321 York Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.890772,35.349525 ]
    },
    "properties": {
    "Title":"Trillium Springs Montessori",
    "Image":"none",
    "Address":"9213 Beatties Ford Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.8956,35.1296 ]
    },
    "properties": {
    "Title":"Harper Middle College High",
    "Image":"none",
    "Address":"315 W Hebron St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.744073,35.308908 ]
    },
    "properties": {
    "Title":"Charlotte Engineering Early College-UNCC",
    "Image":"none",
    "Address":"9000 Robert Snyder Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.692786,35.10741 ]
    },
    "properties": {
    "Title":"Levine Middle College High",
    "Image":"none",
    "Address":"2728 Campus Ridge Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.870511,35.13929 ]
    },
    "properties": {
    "Title":"Starmount Acad of Excellence",
    "Image":"none",
    "Address":"1600 Brookdale Ave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.743914,35.225991 ]
    },
    "properties": {
    "Title":"Lawrence Orr Elementary",
    "Image":"none",
    "Address":"4835 Shamrock Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.783521,35.19514 ]
    },
    "properties": {
    "Title":"Oakhurst STEAM Academy",
    "Image":"none",
    "Address":"4511 Monroe Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.760935,35.360772 ]
    },
    "properties": {
    "Title":"Parkside Elementary",
    "Image":"none",
    "Address":"2945 Johnston-Oehler Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.813271,35.23673 ]
    },
    "properties": {
    "Title":"eLearning Academy",
    "Image":"none",
    "Address":"800 Everett Place"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.841741,35.26758 ]
    },
    "properties": {
    "Title":"J T Williams Secondary Montessori",
    "Image":"none",
    "Address":"2400 Carmine St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.920803,35.207655 ]
    },
    "properties": {
    "Title":"Renaissance West STEAM Academy",
    "Image":"none",
    "Address":"3241 New Renaissance Way"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.734571,35.306158 ]
    },
    "properties": {
    "Title":"Charlotte Teacher Early College",
    "Image":"none",
    "Address":"9201 University City Blvd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.733883,35.285612 ]
    },
    "properties": {
    "Title":"Vaughan Academy of Technology",
    "Image":"none",
    "Address":"8601 Old Concord Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.876499,35.202144 ]
    },
    "properties": {
    "Title":"Marie G Davis",
    "Image":"none",
    "Address":"3351 W Griffith St"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.840231,35.39181 ]
    },
    "properties": {
    "Title":"Merancas Middle College High",
    "Image":"none",
    "Address":"11930 Verhoeff Dr"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.813271,35.23673 ]
    },
    "properties": {
    "Title":"Villa Heights Elementary",
    "Image":"none",
    "Address":"800 Everett Place"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.747361,35.20888 ]
    },
    "properties": {
    "Title":"Albemarle Road Relief School",
    "Image":"none",
    "Address":"6108 Wilora Lake Rd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.944031,35.25012 ]
    },
    "properties": {
    "Title":"Wilson Middle School",
    "Image":"none",
    "Address":"7020 Tuckaseegee Rd"
    }
  }
]

  };

  map.on('load', function(e) {
    // Add the data to your map as a layer
    map.addLayer({
      id: 'locations',
      type: 'symbol',
      // Add a GeoJSON source containing place coordinates and information.
      source: {
        type: 'geojson',
        data: schools
      },
      layout: {
        'icon-image': 'restaurant-15',
        'icon-allow-overlap': true,
      }
    });
    buildLocationList(schools);
  });

  function buildLocationList(data) {
    // Iterate through the list of stores
    for (i = 0; i < data.features.length; i++) {
      var currentFeature = data.features[i];
      // Shorten data.feature.properties to `prop` so we're not
      // writing this long form over and over again.
      var prop = currentFeature.properties;
      // Select the listing container in the HTML and append a div
      // with the class 'item' for each store
      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = 'listing-' + i;
  
      // Create a new link with the class 'title' for each store
      // and fill it with the store address
      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.dataPosition = i;
      link.innerHTML = prop.address;
  
      // Create a new div with the class 'details' for each store
      // and fill it with the city and phone number
      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.city;
      if (prop.phone) {
        details.innerHTML += ' · ' + prop.phoneFormatted;
      }
    }
  }






