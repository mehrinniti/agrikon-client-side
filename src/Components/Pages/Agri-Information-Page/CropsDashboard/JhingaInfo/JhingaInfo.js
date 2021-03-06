import React from 'react';
import { Divider, Typography } from '@mui/material';
import jhinga from '../../../../../images/Agri-info/crops/jhinga_ঝিঙ্গা.jpg'
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const JhingaInfo = () => {

    // dynamic title
    useDocumentTitle("ঝিঙ্গা");

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
                // className="mx-5"
                variant="h3"
                noWrap
                component="div"
            >
                ঝিঙ্গা
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={jhinga} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>ঝিঙ্গা বাংলাদেশের একটি জনপ্রিয় গ্রীষ্মকালীন সবজি। এর প্রতি ১০০ গ্রাম ভক্ষণযোগ্য অংশের মধ্যে রয়েছে ০.৫ গ্রাম প্রোটিন, ৩৩.৬ মাইক্রো গ্রাম বিটা-ক্যারোটিন, ৫ মিগ্রা ভিটামিন সি, ১৮ মিলিগ্রাম ক্যালসিয়াম এবং ২৭ মিলিগ্রাম ফসফরাস। </p>

                            <p className="card-text fw-bold">জলবায়ু ও মাটি </p>
                            <p className="card-text">দীর্ঘ সময়ব্যাপী উষ্ণ ও আর্দ্র আবহাওয়া এবং প্রচুর সূর্যালোক থাকে এমন এলাকা ঝিঙ্গা চাষের জন্য উত্তম। সুনিষ্কাশিত উচ্চ জৈব পদার্থ সমৃদ্ধ দোঁআশ মাটি ঝিঙ্গার সফল চাষের জন্য উত্তম। </p>

                            <p className="card-text fw-bold">জাত</p>
                            <p className="card-text fw-bold">বারি ঝিংগা -১</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text">
                    •    আকর্ষণীয় গাঢ় সবুজ রংয়ের ফল। <br />
                    •    লম্বা গড়ে ২৭ সেমি, ওজন ১২৫ গ্রাম। <br />
                    •    হেক্টর প্রতি ফলন ১০-১৫ টন। <br />
                    •    ২০০৮ সালে অবমুক্ত</p>

                <p className="card-text fw-bold">জীবনকাল</p>
                <p className="card-text">১২০-১৪০ দিন।  </p>

                <p className="card-text fw-bold">বীজ বপনের সময়</p>
                <p className="card-text">ফেব্রুয়ারি থেকে মার্চ মাস পর্যন্ত বীজ বপনের উপযুক্ত সময়। </p>

                <p className="card-text fw-bold">বীজ হার </p>
                <p className="card-text">হেক্টর প্রতি ৩-৪ কেজি বা শতাংশ প্রতি ১২-১৫ গ্রাম বীজের প্রয়োজন হয়। </p>

                <p className="card-text fw-bold">জমি নির্বাচন এবং তৈরিঃ </p>
                <p className="card-text">ঝিঙ্গা চাষে সেচ ও নিকাশের উত্তম সুবিধাযুক্ত এবং পর্যাপ্ত সূর্যালোক প্রায় এমন জমি নির্বাচন করতে হবে। একই গাছের শিকড় বৃদ্ধির জন্য জমি এবং গর্ত উত্তমরুপে তৈরি করতে হয়।  এ জন্য জমিকে প্রথমে ভাল ভাবে চাষ ও মই দিয়ে এমনভাবে তৈরি করতে হবে যেন জমিতে কোন বড় ঢিলা এবং আগাছা না থাকে। </p>

                <p className="card-text fw-bold">বেড তৈরিঃ </p>
                <p className="card-text">বেডের উচ্চতা হবে ১৫-২০ সেমি। বেডের প্রস্থ হবে ১.২ মিটার এবং লম্বা জমির দৈঘ্য অনুসারে সুবিধামত নিতে হবে। এভাবে পরপর বেড তৈরি করতে হবে। এরূপ পাশাপাশি দুইটি বেডের মাঝখানে ৬০ সেমি ব্যাসের সেচ ও নিকাশ নালা থাকবে এবং ফসল পরিচর্যার সুবিধার্থে প্রতি দুবেড পর পর ৩০ সেমি প্রশস্ত নালা থাকবে।  </p>

                <p className="card-text fw-bold">মাদা তৈরি ও চারা রোপণঃ </p>
                <p className="card-text">মাদার আকার হবে ব্যাস ৫০ সেমি, গভীর ৫০ সেমি এবং তলদেশ ৫০ সেমি। ৬০ সেমি প্রশস্ত সেচ ও নিকাশ নালা সংলগ্ন উভয় বেডের কিনারা হইতে ৬০ সেমি বাদ দিয়ে মাদার কেন্দ্র ধরে ২ মিটার অন্তর অন্তর এক সারিতে মাদা তৈরি করতে হবে। প্রতি বেডে এক সারিতে ১৬-১৭ দিন বয়সের চারা লাগাতে হবে। </p>

                <p className="card-text fw-bold">পরবর্তী পরিচর্যা</p>
                <p className="card-text">
                    <b>• সেচ দেওয়াঃ</b> ঝিংগা গ্রীষ্মকালে চাষ করা হয়। গ্রীষ্মকালে মাঝে মাঝে বৃষ্টি হয় বলে তখন সবসময় পানি সেচের প্রয়োজন নাও হতে পারে। কিন্তু ফেব্রুয়ারির শেষ সময় থেকে মে মাস পর্যন্ত খুব শুষ্ক আবহাওয়া বিরাজ করে। তখন অনেক সময় কারণ বৃষ্টিই থাকে না। উক্ত সময়ে ৫-৬ দিন অন্তর  নিয়মিত পানি সেচের প্রয়োজন হয়। </p>
                <p className="card-text">
                    <b>• বাউনি দেওয়াঃ </b>ঝিংগার কাংখিত ফলন পেতে হলে অবশ্যই মাচায় চাষ করতে হবে। ঝিংগা মাটিতে চাষ করলে ফলের একদিক বিবর্ণ হয়ে বাজারমূল্য কমে যায়, ফলে পচন ধরে এবং প্রাকৃতিক পরাগায়ন কম হওয়ায় ফলন হ্রাস পায়।</p>
                <p className="card-text">
                    <b>• মালচিং </b>সেচের পর জমিতে চটা বাধেঁ। চটা বাধঁলে গাছের শিকড়াঞ্চলে বাতাস চলাচল ব্যাহত হয়। কাজেই প্রত্যেক সেচের পর হালকা মালচ করে গাছের গোড়ার মাটির চটা ভেঙ্গে দিতে হবে।</p>
                <p className="card-text">
                    <b>• সার উপরি প্রয়োগঃ </b>চারা রোপণের পর গাছ প্রতি সারের উপরি প্রয়োগের যে মাত্রা উল্লেখ করা আছে তা প্রয়োগ করতে হবে। </p>

                <p className="card-text fw-bold">ফল ধারণ বৃদ্ধিতে কৃত্রিম পরাগায়ন</p>
                <p className="card-text">ঝিংগার পরাগায়ন প্রধানতঃ মৌমাছির দ্বারা সম্পন্ন হয়। প্রাকৃতিক পরাগায়নের মাধ্যমে বেশী ফল ধরার জন্য হেক্টর প্রতি তিনটি মৌমাছির কলোনী স্থাপন করা প্রয়োজন। এছাড়াও কৃত্রিম পরাগায়ন করে ঝিংগার ফলন শতকরা ২০-২৫ ভাগ পর্যন্ত বৃদ্ধি করা সম্ভব। </p>
                <p className="card-text">ঝিংগার ফুল বিকালে ফোটে। বিকাল ৪ঃ০০ সন্ধ্যার মধ্যে ফুল ফোটা শেষ হয়। এর পরাগায়ন ফুল ফোটার পর থেকে সন্ধ্যা পর্যন্ত এবং পরদিন সকালের অগ্রভাগে হয়। ঝিঙ্গার কৃত্রিম পরাগায়নে ভাল ফলন পাওয়া যায়। কৃত্রিম পরাগায়নের নিয়ম হলো ফুল ফোটার পর পুরুষ ফুল ছিড়েঁ নিয়ে ফুলের পাপড়ি অপসারণ করা হয় এবং ফলের পরাগধানী (যার মধ্যে পরাগরেণু থাকে) আস্তে করে স্ত্রী ফুলের গর্ভমুন্ডে (যেটি গর্ভাশয়ের পিছনে পাপড়ির মাঝখানে থাকে) ঘষে দেয়া হয়। </p>

                <p className="card-text fw-bold">ফসল তোলা (ভক্ষণযোগ্য পরিপক্কতা সনাক্তকরণ)</p>
                <p className="card-text">
                    •    ঝিঙ্গার ফল পরাগায়নের ৮-১০ দিন পর সংগ্রহের উপযোগী হয়।<br />
                    •    ফল মসৃণ ও উজ্জল দেখাবে। </p>

                <p className="card-text fw-bold">ফলন</p>
                <p className="card-text">ভালো জাত উর্বর মাটিতে উত্তমরুপে চাষ করতে পারলে হেক্টর প্রতি ১০-১৫ টন (শতাংশ প্রতি ৪০-৬০ কেজি ) ফলন পাওয়া সম্ভব।</p>


            </div>






        </div >

    );
};

export default JhingaInfo;