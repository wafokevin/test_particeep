const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  },
]
export const urlsMovies = [
  'https://images.cinefil.com/movies/1117270_224x340.webp',
  'https://blobimageprocessor.azurewebsites.net/Image/GetRemoteImageStream?path=www.movienewsletters.net/photos/191739R1.jpg?width=270&height=405',
  'https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
  'https://www.themoviedb.org/t/p/w220_and_h330_face/nSlcP0mWJTGs9HDD4QYTcLPJvc4.jpg',
  'https://i.ytimg.com/vi/zd2aTXzj_J4/movieposter.jpg',
  'https://i.ytimg.com/vi/5AJjev6pZoc/movieposter.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800',
  'https://pbs.twimg.com/media/FRwNBZkXIAIu-GH?format=jpg&name=large',
  'https://kinepolis.lu/fr/sites/kinepolis.lu.fr/files/styles/kinepolis_filter_movie_poster/public/posters/the_lost_city.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
  'https://images.cinefil.com/movies/1114210_224x340.webp',
  'https://cdn.vox-cdn.com/thumbor/GUDAs5Yn5rptBI09U252_7DUOyU=/0x0:3600x2400/1200x800/filters:focal(1322x169:1898x745)/cdn.vox-cdn.com/uploads/chorus_image/image/70744151/The_Batman_2022_Official_Images_31.7.jpg',
  'https://static.boredpanda.com/blog/wp-content/uploads/2020/04/brand-name-movie-posters-lance-ford-fb38-png__700.jpg',
  'https://www.onlymelbourne.com.au/image/film-thenorthman.jpg.jpg',
  'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00319643-dxwqjlerur-portrait.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
  'https://pbs.twimg.com/media/FRw5Wm7XoAMYP6W.jpg',
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
