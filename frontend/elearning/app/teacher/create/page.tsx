'use client';

import { useState } from 'react';

const CreateCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [language, setLanguage] = useState('Vietnamese');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [averageQuizScore, setAverageQuizScore] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [currentTopic, setCurrentTopic] = useState<string>('');

  const handleAddTopic = () => {
    if (currentTopic.trim() && !topics.includes(currentTopic)) {
      setTopics([...topics, currentTopic]);
      setCurrentTopic('');
    }
  };

  const handleRemoveTopic = (topicToRemove: string) => {
    setTopics(topics.filter((topic) => topic !== topicToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const courseData = {
      courseName,
      language,
      description,
      price,
      averageQuizScore,
      topics,
    };
    console.log('Course Data:', courseData);
    // Here you can send courseData to the backend API or perform other actions.
    alert('Course created successfully!');
  };

  return (
    <div className="mt-10 create-course-container border-solid border-2 shadow-xl px-6 py-12 lg:px-8 m-100" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 className=" mb-10 text-center text-2xl/9 font-bold tracking-tight text-white bg-hcmutDarkBlue rounded-xl">
        Create Course
      </h1> 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            className='border-solid border-2 rounded-lg'
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            className='border-solid border-2 rounded-lg'
          >
            <option value="Vietnamese">Vietnamese</option>
            <option value="English">English</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }}
            className='border-solid border-2 rounded-lg'
          ></textarea>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="price">Price (coin):</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            className='border-solid border-2 rounded-lg'
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="averageQuizScore">Average Quiz Score to Complete:</label>
          <input
            type="number"
            id="averageQuizScore"
            value={averageQuizScore}
            onChange={(e) => setAverageQuizScore(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            className='border-solid border-2 rounded-lg'
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="topics">Topics:</label>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
            <input
              type="text"
              id="topics"
              value={currentTopic}
              onChange={(e) => setCurrentTopic(e.target.value)}
              style={{ flex: 1, padding: '8px' }}
              className='border-solid border-2 rounded-lg'
            />
            <button
              type="button"
              onClick={handleAddTopic}
              className=' rounded-xl text-white px-8 py-12 ml-10 cursor-pointer bg-hcmutDarkBlue hover:bg-hcmutLightBlue'
              style={{ padding: '8px 12px', marginLeft: '10px', cursor: 'pointer' }}
            >
              Add
            </button>
          </div>
          <div style={{ marginTop: '10px' }}>
            {topics.map((topic, index) => (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  background: '#ddd',
                  padding: '5px 10px',
                  margin: '5px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleRemoveTopic(topic)}
              >
                {topic} &times;
              </span>
            ))}
          </div>
        </div>

        <button type="submit" 
          className='bg-hcmutDarkBlue px-2 py-2 text-white cursor-pointer hover:bg-hcmutLightBlue rounded-xl'
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;