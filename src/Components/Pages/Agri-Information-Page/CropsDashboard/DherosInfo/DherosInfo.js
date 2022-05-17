import React from 'react';
import { Divider, Typography } from '@mui/material';
import derosh from '../../../../../images/Agri-info/crops/Derosh_ঢেঁড়শ.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const DherosInfo = () => {

    // dynamic title
    useDocumentTitle("ঢেঁড়শ");

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
                ঢেঁড়শ
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={derosh} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>ঢেঁড়শ এদেশের একটি জনপ্রিয় সবজি। ঢেঁড়শে প্রচুর পরিমাসে ভিটামিন নি ও সি এবং এছাড়াও পর্যাপ্ত পরিমানে আয়োজিন, ভিটামিন “এ“ ও বিভিন্ন  খনিজ পদার্থ রয়েছে। ঢেঁড়শ নিয়মিত খেলে গলাফোলা রোগ হবার সম্ভাবনা থাকে না এবং এটা হজম শক্তি বৃদ্ধিতেও সহায়তা করে।</p>

                            <p className="card-text fw-bold">মাটি</p>
                            <p className="card-text">দোআশ ও বেলে দোআশ ঢেঁড়শ চাষের জন্য সবচেয়ে উপযোগী। পানি নিষ্কাশনের সুবিধা  থাকলে এটেল মাটিতেও চাষ করা যায়</p>

                            <p className="card-text fw-bold">জাত</p>
                            <p className="card-text">শাউনি,পারবনি কানি-, বারী ঢেঁড়শ, পুশা সাওয়ানী, পেন্টা গ্রীন, কাবুলী ডোয়ার্ফ, জাপানী প্যাসিফিক গ্রীন এসব ঢেঁড়শের চাষ উপযোগী জাত। শেষের দুটো জাত সারা বৎসর ব্যাপী চাষ করা চলে।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">সময়</p>
                <p className="card-text">সারা বছরই চাষ করা যায়। তবে সাধারণতঃ গ্রীষ্মকালে এর চাষ করা হয়। ফাল্গুন চৈত্র ও আশ্বিন-কার্তিক মাস বীজ বোনার উপযুক্ত সময়।</p>

                <p className="card-text fw-bold">বীজের পরিমাণ</p>
                <p className="card-text">প্রতি শতকে  ২০ গ্রাম, হেক্টর প্রতি ৪- ৫ কেজি বীজ লাগে।</p>

                <p className="card-text fw-bold">বীজ বপন</p>
                <p className="card-text">বীজ বোনার আগে ২৪ ঘন্টা ভিজিয়ে নিতে হয়। গভীরভাবে চাষ ও মই দিয়ে মাটি ঝুরঝুরে করে চাষের জমি তৈরি করতে হয়। মাটি থেকে সারির দুরত্ব হবে ৭৫ সেমি.। বীজ সারিতে ৪৫ সেমি. দূরে দূরে ২-৩ টি করে বীজ বুনতে হয়। জাত অনুযায়ী চারা থেকে চারা এবং সারি থেকে সারির দুরত্ব ১৫ সেমি. কমানো বা বাড়ানো যেতে পারে। শীতকালে গাছ ছোট হয় বলে দূরত্ব কমানো যেতে পারে। চারা গজানোর পর প্রতি গর্তে একটি করে সুস্থ সবল চারা রেখে বাকী চারা গর্ত থেকে উঠিয়ে ফেলতে হবে।</p>

                <p className="card-text fw-bold">সারের পরিমাণ</p>
                <p className="card-text">সার       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        এক শতকে       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       হেক্টর প্রতি           </p>
                <p className="card-text">গোবর     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ৭৫ কেজি        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ১৮ টন   </p>
                <p className="card-text">সরিষার খৈল  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ১.৭৫ কেজি      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ৪২৫ কেজি          </p>
                <p className="card-text">ইউরিয়া    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ২৩০ গ্রাম      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ৫৫-৬০ কেজি      </p>
                <p className="card-text">টিএসপি     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ৩৫০ গ্রাম     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ৮৫-৯০ কেজি      </p>
                <p className="card-text">এমও পি     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ২৩০ গ্রাম     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ৫৫-৬০ কেজি</p>

                <p className="card-text fw-bold">সার প্রয়োগের নিয়ম</p>
                <p className="card-text">জমি তৈরি করার সময় ইউরিয়া সার বাদে বাকি সব সার মাটির সাথে ভালভাবে মিশিয়ে দিতে হবে। সার মেশানের ১০-১৫ দিন পর জমিতে ঢেঁড়শ বীজ বপন করতে হয়। ইউরিয়া সার সমান দু‘কিস্তিতে উপরি প্রয়োগ করতে হয়। প্রথম কিস্তিতে চারা গজানোর ২০-২৫ দিন পর এবং ২ য় কিস্তিতে দিতে হবে চারা গজানোর ৪০-৫০ দিন পর।</p>

                <p className="card-text fw-bold">পরিচর্যা</p>
                <p className="card-text">নিড়ানী দিয়ে মাটির উপরিভাগ মাঝে মাঝে আলগা করে দিতে হবে। জমি সব সময় আগাছা মুক্ত রাখতে হবে। মাটির প্রকার ভেদ অনুযায়ী ১০/১২ দিন পর পর সেচ দেয়া প্রয়োজন। প্রতি কিস্তিতে সার প্রয়োগের পর জমিতে সেচ দিতে হবে।</p>

                <p className="card-text fw-bold">পোকামাকড় ব্যবস্থাপনা</p>
                <p className="card-text">ঢেঁড়শের ফল ছিদ্রকারী পোকাই সবচে বেশি ক্ষতি করে। এ ছাড়া জাব পোকা, সাদা মাছি, ছাতরা পোকা, লাল গান্ধি ইত্যাদিও ক্ষতি করে।</p>

                <p className="card-text fw-bold">রোগ ব্যবস্থাপনা</p>
                <p className="card-text">হলদে শিরা স্বচ্ছতা ঢেঁড়শের প্রধান ক্ষতিকর রোগ। এ ছাড়া মোজেইক ও পাতায় দাগ রোগও দেখা যায়।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহ</p>
                <p className="card-text">বীজ বোনার ৬-৮ সপ্তাহের  মধ্যে এবং ফুল ফোটার ৩-৫ দিনের মধ্যে ফল আসা শুরু হয়। জাত ভেদে ফল ৮-১০  সেমি. লম্বা হলেই সংগ্রহ করতে হয়।</p>


            </div>






        </div >


    );
};

export default DherosInfo;