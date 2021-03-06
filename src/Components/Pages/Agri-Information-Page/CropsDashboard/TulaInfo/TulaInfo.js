import React from 'react';
import { Divider, Typography } from '@mui/material';
import tula from '../../../../../images/Agri-info/crops/Cotton_তুলা.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const TulaInfo = () => {

    // dynamic title
    useDocumentTitle("তুলা");

    return (

        <div className=" rounded-3 bg-white my-4 px-5">
            <Typography
                sx={{
                    textAlign: "center",
                    pb: 2,
                    pt: 3,
                    fontWeight: 600,
                    color: 'rgb(37, 36, 36, 0.83)'
                }}
                variant="h3"
                noWrap
                component="div"
            >
                তুলা
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={tula} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>তুলার চাষ</b><br />বাংলাদেশে দুই ধরনের তুলা চাষ করা হয়। সমতল এলাকার ৭টি জোনে সমভূমির তুলা বা আপল্যান্ড কটন এবং পার্বত্য এলাকার ২টি জোনে পাহাড়ি তুলার চাষ করা হয়। পাহাড়ি তুলা এপ্রিল-মে মাসে এবং সমভূমির তুলা জুলাই-আগস্ট মাসে বপন করা হয়। পাহাড়ি তুলা ডিসেম্বর-জানুয়ারি মাসে এবং সমভূমির তুলা জানুয়ারি-মার্চ মাসে উত্তোলন করা হয়।</p>
                            <p className="card-text"><b>১। তুলার চাষকৃত জাতগুলো :</b><br /> সমতল এলাকায় বর্তমানে, সিবি-৫, সিবি-৯ সিবি-১০ ও সিবি-১১ প্রভৃতি উচ্চফলনশীল জাতের তুলা এবং হাইব্রিড জাতের মধ্যে হীরা হাইব্রিড রূপালী-১ ও ডিএম-১ জাতের তুলা চাষ হচ্ছে। এ ছাড়া পার্বত্য চট্টগ্রাম অঞ্চলে পাহাড়ি তুলা-১ ও পাহাড়ি তুলা-২ নামে উচ্চফলনশীল জাতের তুলা চাষ হয়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>২। তুলার বার্ষিক উৎপাদন ও চাহিদা :</b><br /> বিগত ২০০৯-১০ উৎপাদন মৌসুমে ৩১,৫০০ হেক্টর (সমভূমির তুলা-১৭,০৪০ এবং পাহাড়ি তুলা ১৪,৪৬০ হেক্টর জমিতে তুলার চাষ করা হয়। যা থেকে প্রায় ৭০,০০০ বেল (সমভূমির তুলা ৬৪,০০০ বেল এবং পাহাড়ি তুলা-৬,০০০ বেল) আঁশতুলা উৎপাদিত হয়। বাংলাদেশে বর্তমানে তুলার বার্ষিক চাহিদা প্রায় ৪০ লাখ বেল।</p>
                <p className="card-text"><b>৩। তুলার ব্যবহার : </b><br />বীজ তুলা হতে ৩৫-৪০% আঁশ ও ৬০-৬৫% তুলা বীজ পাওয়া যায়। তুলার আঁশ বস্ত্রকলগুলোতে সুতা তৈরির প্রধান কাঁচামাল হিসেবে ব্যবহৃত হয়। বর্জ্য তুলা (গার্মেন্ট শিল্প ও জুট) লেপ-তোষক ও শতরঞ্চি তৈরির কাজে ব্যবহৃত হয়। তুলা বীজ হতে তেল ও খৈল পাওয়া যায়। তুলাবীজ থেকে প্রাপ্ত পরিশোধিত তেল ভোজ্যতেল ও অপরিশোধিত তেল সাবান তৈরির কাঁচামাল হিসেবে ব্যবহৃত হয়। তুলা বীজের খৈল গবাদিপশু ও মাছের খাদ্য হিসেবে ব্যবহৃত হয়। বীজের গায়ে লেগে থাকা আঁশ (Fuzz) পৃথক করার পর এগুলো ব্যান্ডেজ, গজ, ব্লটিং পেপার এবং কটন বাড প্রভৃতি তৈরির কাজে ব্যবহৃত হয়।</p>
                <p className="card-text"><b>৪। তুলা চাষ সংক্রান্ত অন্যান্য তথ্যপ্রযুক্তি ও কর্মসূচি :</b><br /> তুলার সাথে সাথী ফসল হিসেবে বিভিন্ন শাকসবজি যেমন- লালশাক, ডাঁটাশাক, মুলাশাক, বরবটি, মুলা, শসা, বাঁধাকপি, ফুলকপি, ধনেপাতা ইত্যাদি চাষ করা হচ্ছে। রিলে ক্রপ হিসেবে আদা, হলুদ, মরিচ, পটল, আখ ইত্যাদি ফসলের সাথে তুলা চাষ করা যায়। বিভিন্ন ফল বাগান যেমন- কলা, পেঁপে, আনারস, আম বাগানে প্রতি বছর আন্তঃফসল হিসেবে তুলা চাষ করা হয়। এ ছাড়া মুগডাল, ভুট্টা, আলু, গম ও উচ্চ মূল্যের শাকসবজি অন্তর্ভুক্ত করে শস্যবিন্যাস প্রবর্তন করা হচ্ছে।</p>
                <p>উল্লেখ্য, ২০১০-১১ মৌসুমে ৪২ হাজার হেক্টর (সমভূমির তুলা-২৬ হাজার হেক্টর ও পাহাড়ি তুলা ১৬ হাজার হেক্টর) জমিতে তুলা চাষ করে মোট ৯২,৫০০ বেল (সমভূমির তুলা ৮৫,৭০০ বেল ও পাহাড়ি তুলা ৬৮০০ বেল) আঁশতুলা উৎপাদনের লক্ষ্যমাত্রা ধার্য করা হয়।</p>

            </div>
        </div >

    );
};

export default TulaInfo;