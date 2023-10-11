'use client';
import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
interface IUpload {
  title: string;
  acceptOnly: string;
}
const FileUpload: React.FC<IUpload> = ({ title, acceptOnly }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const clickToUploadText = title.substring(0, 15);
  const restOfText = title.substring(13);

  return (
    <div>
      <div className=" flex flex-col mb-[16px] items-center w-screen h-1/4 md:w-4/6 ">
        <label className="cursor-pointer w-full pb-[16px] shadow-md md:py-4 rounded-md ">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden w-full "
          />
          <div className="flex items-center justify-center   ">
            {selectedImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center flex-col">
                <div className=" flex items-center justify-center h-[40px] w-[40px] rounded-full  bg-[#F2F4F7]">
                  <FiUploadCloud className=" text-slate-400" size={15} />
                </div>
                <div className="">
                  <p className=" text-center mb-[4px] text-[#67748E] text-[12px] md:text-[14px] font-normal md:leading-[20px]">
                    <span className="text-[#3699FF]">{clickToUploadText}</span>{' '}
                    {restOfText}
                  </p>
                  <p className="text-[#67748E] text-[12px] md:text-[14px] font-normal md:leading-[20px] text-center md:pb-3">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>
            )}
          </div>
        </label>
        {selectedImage && (
          <p className="mt-2 text-gray-700">{selectedImage.name}</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
