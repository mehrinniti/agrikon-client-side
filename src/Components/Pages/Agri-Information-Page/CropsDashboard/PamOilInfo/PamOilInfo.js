import React from 'react';
import { Divider, Typography } from '@mui/material';
import pamOil from '../../../../../images/Agri-info/crops/palm-oil_পামওয়েল.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const PamOilInfo = () => {

    // dynamic title
    useDocumentTitle("পামওয়েল");

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
                variant="h4"
                noWrap
                component="div"
            >
                পামওয়েল
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pamOil} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text fw-bold">পামওয়েল বৃক্ষ</p>
                            <p className="card-text">পাম ওয়েল গাছ একটি বর্ষজীবি উদ্ভিদ। রোপণের ৩-৪ বছরের মধ্যে ফলন শুরু হয়। একটানা ৬০-৭০ বছর ফল দিয়ে থাকে। বছওে ৮-১০টি কাঁদি আহরণ করা যায়। একটি কাঁদিও ওজন ৪০-৮০ কেজি পর্যন্ত হয়। ঝড় জলোচ্ছাসে এই গাছ সহজে ক্ষতি হয় না। অন্যান্য গাছ থেকে ১০ গুণ বেশি অক্সিজেন দেয়।</p>

                            <p className="card-text fw-bold">কেন পামওয়েল চাষ করবো :</p>
                            <p className="card-text">
                                ১) (এক একরে) পামওয়েল চাষে ঘওে বসেই মাসে লক্ষ টাকা আয় করা সম্ভব। প্রতি গাছে মাসে ১,০০০/=টাকা আয় হয়।<br />
                                ২) একটি পরিবারের সারা বছরের তেলের চাহিদা পূরনের জন্য দুটি গাছই যথেষ্ট।<br />
                                ৩) একবার বিনিয়োগে ৬০-৭০ বছর আয়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p>৪) কোটি কোটি টাকার তেল আমদানী বাঁচবে।<br />
                    ৫) দূষণমুক্ত পরিবেশ, অর্থনৈতিক মুক্তি, বেকারত্বেও অবসান হয়।  </p>

                <p className="card-text fw-bold">পাম ওয়েল ফল</p>
                <p className="card-text fw-bold">পাম ওয়েল চাষ পদ্ধতি ক্ষেত্র :</p>
                <p className="card-text">বাংলাদেশের সকল জেলাউ পামওয়েল চাষের উপযোগী। পাম চাষে বাংলাদেশ অচিরেই আরও সমৃদ্ধ হবে। দেশের সর্বত্র বিশেষ কওে অনাবাদী ও খালী জমিতে, রাস্তার পাশে, স্কুল, কলেজ মাদ্রাসা, উপসনালয়ের খালি জায়গায়, সরকারী ও বেসরকারী প্রতিষ্ঠানের খালি জায়গায়, বনভূমিতে পাম ওয়েল চারা রোপন করা যায়। ২০ ফুট দূরত্বে ২ফুট x  ২ফুট x ২ফুট গর্ত কওে মাটির সঙ্গে<br />
                    ১) গোবর সার ৫-৭ কেজি<br />
                    ২) টি.এস.পি ১০০ গ্রাম<br />
                    ৩) এমওপি ৫০ গ্রাম মিশিয়ে চারা রোপণ করতে হয়।</p>

                <p className="card-text fw-bold">পাম ওয়েল ফল ও তেল সংগ্রহ</p>
                <p className="card-text">পামওয়েল ফল থেকে হাতে ও মেশিনে তেল সংগ্রহ করা যায়। ফলগুলো পানিতে সিদ্ধ কওে চিপন দিলে তেল বের হয়। টঙ্গী মাজুখানে ইতিমধ্যে মিল স্থাপন হযেছে। ভবিস্যতে সমগ্র দেশেই ক্ষুদ্র ও বৃহৎ স্থাপন করা হবে।</p>

                <p className="card-text fw-bold">সাবধানতা :</p>
                <p className="card-text">
                    ১) অসাধু চারা বিক্রেতার চারা ক্রয় করলে  ভূমি, অর্থ ও সময় নষ্ট হবে।<br />
                    ২) সফল গবেষকের চারা নিশ্চিত হয়ে জেনে শুনে বুঝে ক্রয় করুন।</p>

                <p className="card-text fw-bold">সেবা সমূহ :</p>
                <p className="card-text">
                    ১) টাঙ্গাইলের গবেষনালব্ধ উন্নতজাতের পামওয়েণ চারা।<br />
                    ২) পরিচর্ষা পদ্ধতি।<br />
                    ৩) বানিজ্যিক ভিত্তিতে প্রজেক্ট তৈরী।<br />
                    ৪) উপযুক্ত মূল্যে ফল ক্রয়।<br />
                    ৫) ক্ষুদ্র ও বৃহৎ শিল্প স্থাপনে পরামর্শ</p>

            </div>
        </div >


    );
};

export default PamOilInfo;