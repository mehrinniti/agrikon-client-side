import React from 'react';
import { Divider, Typography } from '@mui/material';
import tisi from '../../../../../images/Agri-info/crops/Linseed_তিসি.png';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const TisiInfo = () => {

    // dynamic title
    useDocumentTitle("তিসি");

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
                তিসি
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={tisi} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p><b>ফসলের নাম-তিসি</b> (Linseed)<br /><b>উদ্ভিদতাত্ত্বিক নাম:</b> Linum Utitatissimum Linn.<br /><b>পরিবার:</b> Linaceae.</p>

                            <p className="card-text fw-bold">পুষ্টিমূল্য/উপাদান : </p>
                            <p className="card-text">প্রোটিন, তেল, কার্বোহাইড্রেট, ছাই, আঁশ বিদ্যমান।</p>

                            <p className="card-text fw-bold">ব্যবহার : </p>
                            <p className="card-text">যন্ত্রপাতির জন্য গ্রিজ ও সাবান তৈরিতে ব্যবহার করা হয়।</p>

                            <p className="card-text fw-bold">উপযুক্ত জমি ও মাটি : </p>
                            <p className="card-text">এঁটেল মাটি তিসি চাষের জন্য সবচেয়ে বেশি উপযোগী। পলি দো-আঁশ ও এঁটেল দো-আঁশ মাটিতেও এর চাষ করা যায়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">জাত পরিচিতিঃ নীলা (লিন-১)</p>
                <p className="card-text">জাতটি বাছাই প্রক্রিয়ার মাধ্যমে নির্বাচন করা হয়েছে এবং ১৯৮৮ সালে জাতীয় বীজ বোর্ড কর্তৃক অনুমোদিত হয়। জাতটির বৈশিষ্ট্য হলো-বীজ ছোট ও চেপ্টা। ফল ১০০০ বীজের ওজন ৩.০-৩.৫ গ্রাম। ফুলের রং নীল। বীজ হাতে ধরলে পিচ্ছিল অনুভূত হয়। বীজে তেলের রিমাণ শতকরা ৩৮ ভাগ। হেক্টর প্রতি ফলন ৮৫০-৯৫০ কেজি।</p>

                <p className="card-text fw-bold">বীজ বপন : </p>
                <p className="card-text">কার্তিক মাস (মধ্য অক্টোবর হতে বীজ ছিটিয়ে বপন করতে হয়। তবে সারিতে বপন করলে সারি থেকে সারির দূরত্ব হবে ৩০ সে.মি.।</p>

                <p className="card-text fw-bold">বীজের হার : </p>
                <p className="card-text">৭-৮ কেজি/হেক্টর।</p>

                <p className="card-text fw-bold">সার ব্যবস্থাপনা : </p>
                <p className="card-text">সাধারণত তিসি বিনা সারে চাষ করা হয়। তবে ভালো ফলন পেতে হলে নিম্নরূপ হারে সার প্রয়োগ করতে হবে।<br />
                    <b>সার     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    হেক্টর প্রতি সারের পরিমাণ (কেজি)</b><br />
                    ইউরিয়া     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ৭০-৮০<br />
                    টিএসপি     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ১১০-১৩০    <br />
                    এমওপি     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ৪০-৫০</p>
                <p>ইউরিয়া সার অর্ধেক ও বাকি অন্যসব সার শেষ চাষের সময় জমিতে মিশিয়ে দিতে হবে। বাকি অর্ধেক ইউরিয়া বীজ বপনের ২৫-৩০ দিন পর প্রয়োগ করতে হবে।</p>

                <p className="card-text fw-bold">সেচ ও আগাছা ব্যবস্থাপনা : </p>
                <p className="card-text">প্রয়োজনে ১-২ বার সেচ দিতে হবে। আর জমিতে আগাছা থাকলে সময়মতো আগাছা দমন করতে হবে।</p>

                <p className="card-text fw-bold">পোকা মাকড় ব্যবস্থাপনা : </p>
                <p className="card-text">পোকামাকড়ের আক্রমণ উল্লেখযোগ্য নহে।</p>

                <p className="card-text fw-bold">রোগ ব্যবস্থাপনা: </p>
                <p className="card-text fw-bold">রোগের নাম: পাতা ঝলসানো রোগ</p>
                <p className="card-text">পোকামাকড়ের আক্রমণ উল্লেখযোগ্য নহে।</p>

                <p className="card-text fw-bold">ভূমিকা: </p>
                <p className="card-text">অলটারনেরিয়া লিনি নামক একপ্রকার ছত্রাকের সাহায্যে এ রোগ ছড়ায়। এটি একটি বীজবাহিত রোগ।</p>

                <p className="card-text fw-bold">ক্ষতির নমুনা : </p>
                <p className="card-text">প্রথমে পাতার উপর ঘন বাদামী বর্ণের অসম আকৃতির দাগ পড়ে। রোগের প্রকোপ বৃদ্ধি পেলে পাতা শুকিয়ে যায়।</p>

                <p className="card-text fw-bold">অনুকূল পরিবেশ :</p>
                <p className="card-text">আর্দ্র আবহাওয়া</p>

                <p className="card-text fw-bold">বিস্তার: </p>
                <p className="card-text">বাতাসের সাহায্যে এ রোগ বিস্তার লাভ করে।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা:</p>
                <p className="card-text">
                    ক) বীজ শোধন : বীজ বপনের পূর্বে প্রতি কেজি বীজে ২.৫ গ্রাম ভিটাভেক্স-২০০ দিয়ে বীজ শোধন করতে হবে।<br />
                    খ) আগাছা দমনসহ ফসলের পরিচর্যার মাধ্যমে রোগের প্রাদুর্ভাব কমানো যায়।<br />
                    গ) গাছে এ রোগের লক্ষণ দেখা দেয়া মাত্র প্রতি লিটার পানিতে ২ গ্রাম রোভরাল-৫০ ডব্লিউপি মিশিয়ে ১০ দিন পরপর ৩ বার স্প্রে করতে হবে।</p>

                <p className="card-text fw-bold">ফসল তোলা : </p>
                <p className="card-text">তিসি ফাল্গুন-চৈত্র মাসে পাকে। পাকলে গাছ এবং ফল সোনালী বা কিছুটা তামাটে রং ধারণ করে। ফল ভালভাবে পাকার পরই গাছ কাটা বা উপড়ানো উচিৎ। ফসল কেটে বা উপড়িয়ে নেয়ার পর গাছগুলো ছোট ছোট আঁটি বেঁধে বাড়ির আঙ্গিনায় স্তুপ করে রাখা যায়। জীবনকাল ১০০-১১৫ দিন।</p>

            </div>
        </div >


    );
};

export default TisiInfo;