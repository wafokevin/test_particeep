import {Row, Button, Col, Select, Space, Typography} from 'antd'
import {DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'

export const Pagination = ({totalMovies, moviesByPage, switchPage, setCurrentPage, currentPage, setMoviesByPage}) => {
    const pagesNumber = []
    for (let index = 1; index <= Math.ceil(totalMovies / moviesByPage); index++) {
        pagesNumber.push(index) 
    }
    return (
        <Row justify='end' gutter={[0, 16]}>
            <Col span={24}>
                <Row justify='end'>
                    <Space direction='horizontal'>
                        <Typography ellipsis >Movies per page: </Typography>
                        <Select
                            onChange={(value) => setMoviesByPage(value)}
                            value={moviesByPage}
                        >
                            <Select.Option value={4}>{4}</Select.Option>
                            <Select.Option value={8}>{8}</Select.Option>
                            <Select.Option value={12}>{12}</Select.Option>
                        </Select>
                    </Space>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify='end'>
                    <Button key='precedent' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} icon={<DoubleLeftOutlined />} />
                    {
                        pagesNumber.map(p => (
                            <Button key={p} type={currentPage === p ? 'primary' : 'default'} onClick={() => switchPage(p)}  >{p}</Button>
                        ))
                    }
                    <Button key='next' disabled={currentPage === pagesNumber[pagesNumber.length - 1]} onClick={() => setCurrentPage(currentPage + 1)} icon={<DoubleRightOutlined />}  />
                </Row>
            </Col>
            
        </Row>
    )
}