import React from 'react';
import { Divider, Typography } from '@mui/material';
import til from '../../../../../images/Agri-info/crops/gorjontil_গর্জন তিল.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const TilInfo = () => {

    // dynamic title
    useDocumentTitle("গর্জন তিল");

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
                গর্জন তিল
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={til} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text fw-bold">ফসলের নাম : গর্জন তিল</p>
                            <p className="card-text">
                                <b>উদ্ভিদতাত্ত্বিক নাম : </b>Guizotia Abyssinica Coss.<br />
                                <b>পরিবার : </b>Comositae.</p>

                            <p className="card-text fw-bold">পুষ্টিমূল্য : </p>
                            <p className="card-text">লিনোনিক ফ্যাটি এসিড ও প্রোটিন আছে।</p>

                            <p className="card-text fw-bold">ভেষজ গুণ : </p>
                            <p className="card-text">কোলেস্টেরল ফ্রি। আবশ্যকীয় ফ্যাটি এসিড সমূহের উৎস হিসেবে কাজ করে।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">ব্উপযুক্ত জমি ও মাটি : </p>
                <p className="card-text">গর্জন তিল প্রায় সব ধরনের মাটিতে চাষ করা যায়। তবে দো-আঁশ এবং বেলে দো-আঁশ মাটিতে ভালো হয়।</p>
                <p className="card-text"><b>জাত পরিচিতি : </b>শোভা।</p>
                <p>জাতটি বাছাই প্রক্রিয়ার মাধ্যমে নির্বাচন করা হয়। ১৯৮৮ সালে জাতীয় বীজ বোর্ড কর্তৃক চাষের জন্য অনুমোদিত হয়। গাছের কান্ড সাধারণত সবুজ ও বেগুনী রংয়ের হয়। কান্ড ও পাতায় লোমের মতো থাকায় হাত দিয়ে ধরলে খসখসে মনে হয়। তবে সেগুলো বেশ নরম। ফুল ছোট ও হলুদ রংয়ের। বীজ সূচাকৃতির এবং ১.২৫ সে.মি. পাতলা ও বেশ মসৃন। ১০০০ বীজের ওজন ৩-৪ গ্রাম। জীবনকাল ১০৫-১১০ দিন। হেক্টর প্রতি ফলন ১.০৫-১.১০ টন।</p>

                <p className="card-text fw-bold">বীজ বপন :  </p>
                <p className="card-text">জমিতে বীজ ছিটিয়ে বপন। তবে সারিতে বুনলে সারি থেকে সারির দূরত্ব হবে ৩০ সে.মি.। হেক্টর প্রতি বীজের পরিমাণ ৭.৫-৮.৫ কেজি।</p>
                <p><b>বপন সময় : </b>কার্তিক মাস</p>

                <p className="card-text fw-bold">সেচ ও আগাছা ব্যবস্থাপনা :</p>
                <p className="card-text">জমিতে সেচ দেয়ার প্রয়োজন হয়না, কিন্তু মাটিতে রস না থাকলে সেচ দেয়া প্রয়োজন। জমিতে আগাছা দেখা দিলে নিড়ানি দিয়ে উহা তুলে ফেলতে হবে।</p>

                <p className="card-text fw-bold">পোকামাকড় ব্যবস্থাপনা :</p>
                <p className="card-text"><b>পোকার নাম :</b> গর্জন তিল ফসলের ৰতিকর পোকামাকড় এখনও পাওয়া যায়নি।</p>

                <p className="card-text fw-bold">রোগের নাম : পাতা ঝলসানো রোগ</p>
                <p className="card-text"><b>ভূমিকা : </b>অলটারনেরিয়া প্রজাতির ছত্রাকের কারণে এ রোগ হয়ে থাকে।</p>

                <p className="card-text fw-bold">ক্ষতির নমুনা : </p>
                <p className="card-text">এ রোগের আক্রমণে প্রথমে পাতার উপর অসম আকৃতির গাঢ় বাদামী বর্ণের দাগ পড়ে। দাগগুলো ধীরে ধীরে বড় হওয়ার পর অনেকগুলো দাগ একত্রিত হয়ে পাতার অধিকাংশ স্থান দখল করে ফেলে। আক্রমণ বেশী হলে পাতা ঝরে পড়ে।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা : </p>
                <p className="card-text">রোগ দেখা দেয়ার সাথে সাথে প্রতি লিটার পানিতে ২ গ্রাম রোভরাল-৫০ ডবিৱউ পি অথবা ডাইথেন-এম-৪৫ মিশিয়ে জমিতে ২/৩ বার প্রয়োগ করতে হবে।</p>

                <p className="card-text fw-bold">ফসল তোলা : </p>
                <p className="card-text">১০৫-১১০ দিনের মধ্যে ফসল তোলা যায়।</p>

            </div>
        </div >


    );
};

export default TilInfo;