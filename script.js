const leftOnes=document.querySelector(".left-ones")
const rightOnes=document.querySelector(".right-ones")

const myArrLeftLinks=[
"https://open.spotify.com/playlist/2T1AT9LgA41gO40DwqH3wj?si=WsprEFuNS-Gfpaz0IVHm2g&utm_source=copy-link",
"https://open.spotify.com/playlist/0hWlLWHmgdfTpFO79um6f7?si=258cb9fff2264406",
"https://open.spotify.com/playlist/2oAmppKgffvI1FUrV5D56K?si=d1ad8dea67f541f0",
"https://open.spotify.com/playlist/0DZfWCmXdtnrhZtuYzz363?si=a4e39e9d62af42d0",
"https://open.spotify.com/playlist/3QO38WbJyF3PtclO9Yi8kA?si=1f7faa2581274a11",
"https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn?si=b611bdf30f3a4dc8",
"https://open.spotify.com/playlist/0IQo4hoPuOVMi6QuOBWEYU?si=b944cee9da7a471c",
]
const myArrLeftNames=[
"sakaroz",
"bad guy",
"inter",
"chill lofi beats",
"tavikka",
"lofi beats",
"sad songs",
]
const myArrRightLinks=[
"https://open.spotify.com/playlist/5UsLxiE9CYANtLMUP03Vcg?si=0gJSksAURsSSNq5sbHA-0A&utm_source=copy-link",
"https://open.spotify.com/playlist/5v9ERprnd8BP87JBwF0C0K?si=01427f4824424167",
"https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j?si=21861923fe9143ff",
"https://open.spotify.com/playlist/4wvjbFvgRx4ks1IfZbpbF7?si=48bcf0c5a8e04c4e",
"https://open.spotify.com/playlist/23FA2HUUIymQHJ2rbu5uOx?si=962844b9d3a446a0",
"https://open.spotify.com/playlist/37i9dQZF1DX571ttkrxAeN?si=3e0f154f67654fc8",
"https://open.spotify.com/playlist/37i9dQZF1DXcC6YLqj8ET8?si=e2f504c0a85d4255",
]
const myArrRightNames=[
"chili'n vibe",
"driving",
"coding mode",
"international gang",
"sparta",
"acoustic cafe international",
"arabic trap",
]
for(let i=0;i<myArrLeftLinks.length;i++){
    leftOnes.innerHTML+=`<a href="${myArrLeftLinks[i]}">${myArrLeftNames[i]}</a> `
    rightOnes.innerHTML+=`<a href="${myArrRightLinks[i]}">${myArrRightNames[i]}</a> `
}