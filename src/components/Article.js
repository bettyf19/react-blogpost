import React from 'react';

const Article = ({ date, title, imageSrc, content }) => {
  return (
    <article>
      <h2 style={{ color: 'gray' }}>{date}</h2>
      <h1>{title}</h1>
      <img src={imageSrc} alt={title} />
      <p>{content}</p>
      <div class="right">
      <a href="#" style={{ color: 'tomato', textDecoration: 'none' }}>Continue ...</a>
      </div>
      <p className='bottom'></p>
    </article>
  );
}

export default Article;

// const students = [
//   { name : 'Vicky',
//    age: '34',
//   image: 'www.image.com/image.jpg' },
//   { name : 'Betty',
//   age: '30',
//   image: 'www.image.com/image.jpg'}
//   ]
//   students.map ( student. index) =>
//   student.name
//   student.age
// the map part goes in the return