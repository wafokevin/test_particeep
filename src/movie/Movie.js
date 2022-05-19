import { useEffect, useState } from 'react'
import { movies$, urlsMovies } from '../movies'
import {Card, Avatar, Row, Col, Popconfirm} from 'antd'
import { LikeOutlined, DeleteOutlined, DislikeOutlined, LoadingOutlined  } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import {setMoviesData, deleteMovies, likeMovie} from '../feature/movies.slice'
import {Pagination} from './Pagination'
const { Meta } = Card;

export const Movie = ({categoriesSelected, currentPage, setCurrentPage}) => {
    const [loading, setLoading] = useState(false)
    const [moviesByPage, setMoviesByPage] = useState(4)
   
    const dispatch  = useDispatch()
    const moviesData = useSelector((state) => state.movies.movies)
    const adaptedMoviesData = categoriesSelected.length > 0 ? moviesData.filter(m => categoriesSelected.includes(m.category)) : moviesData
    const handleDeleteMovie = (id) => {
        dispatch(deleteMovies(id))
    }
    const handleLike = (id, likeEnum ) => {
        dispatch(likeMovie({id: id, likeEnum: likeEnum}))
    }
    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            movies$.then((res) => {
                dispatch(setMoviesData(res.map(r => ({...r, likeEnum: 'not_yet'}))))
                setLoading(false)
              })
              .catch((err) => {
              });
        }
        fetchMovies()
    }, [])  

    const indexOfLastPost = currentPage * moviesByPage
    const indexOfFirstPage = indexOfLastPost - moviesByPage
    const currentPosts = adaptedMoviesData.slice(indexOfFirstPage, indexOfLastPost)

    const switchPage = (value) => setCurrentPage(value)

    if(loading){
        return <div style={{width: '100%', height: '100%'}}><Row justify='center' align='middle'><LoadingOutlined /></Row></div>
    }
    
    return (
    <div style={{width: '100%', height: '100%'}}>
       <Row gutter={[16, 16]} justify='center' >
           {currentPosts?.map((movie, i) => (
               <Col key={movie.id}>
               <Card
               onClick={(e) => e.stopPropagation()}
               hoverable  
               style={{ width: 300 }}
               cover={
               <img
                   alt={`pict-of-${movie.title}`}
                   src={urlsMovies[i]}
               />
               }
               actions={[
                    <DislikeOutlined
                        key="DislikeOutlined" 
                        style={{color: movie.likeEnum === 'dislike' ? 'red' : undefined, fontSize: movie.likeEnum === 'dislike' ? 20 : undefined}}
                        onClick={() => handleLike(movie.id, movie.likeEnum === 'dislike' ? 'not_yet' : 'dislike')}
                    />,
               <LikeOutlined 
                    key="LikeOutlined"
                    style={{color: movie.likeEnum === 'like' ? 'blue' : undefined, fontSize: movie.likeEnum === 'like' ? 20 : undefined}}
                    onClick={() => handleLike(movie.id, movie.likeEnum === 'like' ? 'not_yet' : 'like')}
                 />,
               <Popconfirm placement="top" title='are you sure you want to delete this movie?' onConfirm={(e) =>{
                    handleDeleteMovie(movie.id)
                    e.stopPropagation()
                    }} 
                    okText="Yes" cancelText="No"
                >
                <DeleteOutlined style={{color: 'red'}} key="deleted"/>
                </Popconfirm>
               ]}
           >
               <Meta
               avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
               title={movie.title}
               description={`The description of the movie "${movie.title}", for the "particeep test". I will pass the test hahah`}
               />
           </Card>
           </Col>
           ))}
           {adaptedMoviesData.length > 0 && <Col span={24}>
               <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} moviesByPage={moviesByPage} totalMovies={adaptedMoviesData.length} switchPage={switchPage} setMoviesByPage={setMoviesByPage} />
           </Col>}
       </Row>
    </div>
    )
}