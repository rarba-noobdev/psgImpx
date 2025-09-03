const productsArry = [
    // Product 1
    {
      id: 1,
      name: "Indexable U Drill",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaD65p6WKEXsT8xI6-rOCoykwNiX7qfDMMZBbGGKJ9r2fnXbAFi4nDln8xumiwWXZvec8ewig4rjlReOvphP4fta_9HDCg=s2560",
      alt: "udrills"
    },
    // Product 2
    {
      id: 2,
      name: "SPMG/SPGT 05/06/07/09/11/14",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCYF21Jh6_5y7KZQc6te6eHLDikx8cwPc_B7J6X-hxHx2k0LhmK6pfrfBCaVlJgCSRi9clyjrG4i4bU7hHG2sHgJJRJsg=s2560",
      alt: "SPMG /SPGT 05/06/07/09/11/14"
    },
    // Product 3
    {
      id: 3,
      name: "Top Clamp Tool Holders",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDwXo6LId6JUcD2qPAmz38_G2ysFmLBnoxHgQlM_48Qe8k6NzVyUvInV1MJ7tbCjKdZHe-MTfZaeXvBjr-YAw9ykGvRCA=s2560",
      alt: "Tool-Holders"
    },
    // Product 4
    {
      id: 4,
      name: "Boring Bars",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDfqxw5i3t3iHuyY00blUxfWHZ3hfdkiHREV4tetPS-XF-YWPjxw5VqDsTvFKkDXTub92yO5CaLDjZPfNUUtpKxEc1Kaw=s2560",
      alt: "Boring bars"
    },
    // Product 5
    {
      id: 5,
      name: "Indexable End Mill",
      imageSrc: "https://5.imimg.com/data5/SELLER/Default/2021/9/WG/EQ/UY/7053514/indexable-end-mill-cutters-500x500.jpg",
      alt: "indexable-end-mill"
    },
    // Product 6
    {
      id: 6,
      name: "APMT 1135 / APMT 1604",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAy9wW68twC2RSBbvTwisAO-jKVOZT6yMugWZShzREPJY4x8kxSwKIAnF1t79a7F2PuVh87Cm1KJPw-JceBUdSzIxcejg=s2560",
      alt: "Tungsten Carbide Turning Indexable Insert Apmt 1135 Apmt 1604 Apkt 1604 1003 170516r"
    },
    // Product 7
    {
      id: 7,
      name: "Grooving/Parting Insert",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDpvVff_DpgaYNL9TdPuBVYdAUbE9g9xKxelj0nwGCNLMtgqpoQ1Q3lOYmGIBTEq88477CjF8NcequNmLNgdrGJXoOcoA=s2560",
      alt: "grooving-insert parting-insert"
    },
    // Product 8
    {
      id: 8,
      name: "Solid Carbide Drill/End Mill/Reamer/Hole Mill/Form Tools",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDEE0hxUwfwOPPextSb4bzVkRad-sUGvgeNHgjD_GcZCEl2wx2vuFheOauXrPgm09e4dtD0jZHA3tDJhGbz2cZEgl_3=s2560",
      alt: "Stainless Steel Hss And Solid Carbide Drills End Mills & Reamers"
    },
    // Product 9
    {
      id: 9,
      name: "Carbide/PCD/CBN/Cermet Insert",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDbQSW30KTkniclKbB2N26tYCMgcEkeRvSuoe-nnt6Ya9R1BZlHyxG0jCah349hR3KSgd9QjLm1c8cGfal9-pNNH9eGaQ=s2560",
      alt: "CNC all carbides"
    },
    // Product 10
    {
      id: 10,
      name: "Face/Shoulder Milling Cutters",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaB-JdW313A29HvsV4qwL7cDsnaeF2_ro2mZ2fF1J8c-LURHonuKb_x0WJucOUz_gX86OGMzmHOf7KEitfHdPRDayRr3IA=s2560",
      alt: "Face Shoulder Cutters"
    },
    // Product 11
    {
      id: 11,
      name: "Imported Solid Carbide Rods",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBmhsqn-hoYdlDPo392RAl38ME0jOFpj5qwMXnJfcUL0LxLsPWWLwMHUOFJWSqH5W_IaOjL_hus8ZP-WHtNHMp0v4NQ6w=s2560",
      alt: "solid carbide rods"
    },
    // Product 12
    {
      id: 12,
      name: "BT 40 Adaptor",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCXyj2d0P1msMbphZyeuE76mRp4boJzt5PiySby3S-lTgD77yURZdmnWbR2OqMOlveyVJvmp5SqcB06GPJrU1J4gcNwog=s2560",
      alt: "BT40 Adapters"
    },
    // Product 13
    {
      id: 13,
      name: "APMT 1135 PDER",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AITFw-yfyFXV-sJC5ZIiIPfYNxh3tgF7Z8bIB3QM6CLRL4meCtPiOzvxvzE-qgv7vT0Sj3qkvdL_rcAof6ETyMnGkyt_kK1LIQ=s1600",
      alt: "APMT1135"
    },
    // Product 14
    {
      id: 14,
      name: "APMT 1604 PDER",
      imageSrc: "https://lh3.googleusercontent.com/drive-viewer/AITFw-xfR-Cwt7MZ3Vp_gmDqyrqaoIDoZwL3Uw6oPysdi9-9kH5DVUQegJxDhu4osJqun6zYtO7It_xPa77ODMyd4HiWN74Skw=s1600",
      alt: "BT40 Adapters"
    }
];

  
  let productClass = document.querySelector(".products"); // Use querySelector instead of querySelectorAll if there's only one container element

  for (let i = 0; i < productsArry.length; i++) {
      let productElement = document.createElement("div");
      productElement.classList.add("product", "product" + (i + 1));
      let productName = document.createElement('h3');
      productName.innerText = productsArry[i].name;
      let productImages = document.createElement("img");
      productImages.src = productsArry[i].imageSrc; // Set the image source based on your data
      productImages.alt = productsArry[i].alt; // Set the alt attribute based on your data
  
      productClass.appendChild(productElement); // Append the div to the container
      productElement.appendChild(productImages); // Append the img element to the div
      productElement.appendChild(productName);
  
  }
  
  
  
