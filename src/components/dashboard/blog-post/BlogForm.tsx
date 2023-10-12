'use client';
import React, { useEffect, useState } from 'react';
import Input from '../Input';
import TextArea from '../TextArea';

const BlogForm: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    blogger: '',
    content: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isContentTooLong = formData.content.length > 400;
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className=" w-full bg-white rounded ">
      <Input
        placeholder="What is your title?"
        onChange={handleChange}
        value={formData.title}
        name="title"
        label="Title*"
        isCliphboard={false}
      />

      <Input
        type="text"
        label=" Category*"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter the blog category"
        isCliphboard={false}
      />

      <Input
        type="text"
        label="Blogger*"
        id="blogger"
        name="blogger"
        value={formData.blogger}
        onChange={handleChange}
        placeholder="Enter the blogger's name"
        isCliphboard={false}
      />

      <TextArea
        id="content"
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
        maxLength={400}
        rows={6}
        label="Blog inputs*"
        labelMax="400 characters left"
        isContentTooLong={isContentTooLong}
      />
    </div>
  );
};

export default BlogForm;
