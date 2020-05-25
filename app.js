// カード表示花形
const Card = ({ src, text ,ttt}) => `
  <div class="col-4 mb-5">
    <div class="card">
      <img src="${src}" class="card-img-top" alt="...">
      <div class="card-body">
      <a href=" ${ttt}" target="_blank">
        <h5 class="card-title">${text}</h5>
        <p class="card-text"></p>
      </a>  
      </div>
    </div>
  </div>
`;
$('#search-btn').on('click', () => {
  // 検索ワードの取得
  const word = $('#search-word').val()
  // Ajax開始
  $.ajax({
    url:'https://itunes.apple.com/search',
    type:'GET',
    dataType:'json',
    data : {
      term:word,
      country:'jp',
      
    }
  }).done((response) => {
    console.log(response)
    console.log(response.results[0].artworkUrl100)
    // let url = response.results[0].artViewurl;
    for (let i=0; i< 50 ; i++ ) {
      
      let url = response.results[i].artworkUrl100;
      console.log(url)
      let textart = response.results[i].collectionName;
      let view = response.results[i].collectionViewUrl;
      console.log(view)

      
      $('#results').append(
            Card({src:url, text:textart, ttt:view}));
         
    }
  }).fail((error) => {
    console.log(error)
  })
})

