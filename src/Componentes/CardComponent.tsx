import React from 'react';
import { Card } from 'react-bootstrap';

interface CardProps {
    title: string;
    content: string;
}

const CardComponent: React.FC<CardProps> = ({ title, content }) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
