import {Row, Col, Typography, Select, Button, message } from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {addMovie} from '../feature/movies.slice'

export const Header = ({setCategoriesSelected, categoriesSelected, setCurrentPage}) => {
    const moviesData = useSelector((state) => state.movies.movies)
    const categoriesData =  [...new Set(moviesData.map(m => m.category))] 
    const dispatch = useDispatch()
    const handleAddMovies = () => {
        const data = {
            id: (Math.random() * 100).toString(),
            title: 'Movie of test particeep',
            category: 'Test',
            likes: 0,
            dislikes: 0
        }
        dispatch(addMovie(data))
        message.success(`the "${data.title}" movie has been added`)
    }
    return (
    <Row style={{width: '100%'}}>
        <Col span={24} style={{padding: '1rem', backgroundColor: '#003a8c'}} >
            <Row justify='space-between'>
                <Typography style={{fontSize: 34, color: '#ffffff', fontFamily: 'Times New Roman, sans-serif'}}>MY MOVIES</Typography>
                <Button type="primary" shape="round" icon={<PlusOutlined />} size='middle' onClick={() => handleAddMovies()}>
                    Add movie  
                </Button>
            </Row>
        </Col>
        <Col span={24} style={{padding: '1rem'}} >
            <Row style={{width: '100%'}}>
                <Col span={24}>Filters : </Col>
                <Col span={24}>
                <Select
                mode="multiple"
                allowClear
                placeholder="Please select"
                onChange={(value) => {
                    setCategoriesSelected(value)
                    setCurrentPage(1)
                }}
                value={categoriesSelected}
                style={{width: '100%'}}
                >
                    {
                        categoriesData.map(c => <Select.Option key={c} value={c}>{c}</Select.Option>)
                    }
                </Select>
                </Col>
            </Row>
        </Col>
    </Row>
    )
}