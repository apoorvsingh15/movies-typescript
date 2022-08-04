import * as React from "react";
import { Button, Card } from 'antd';
import '../css/Home.css';
const Home = () => {
    const { Meta } = Card;
    return (
        <div className="mainClass">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
    );
}

export default Home;