import React from 'react';
import { Divider, Typography } from '@mui/material';
import ada from '../../../../../images/Agri-info/crops/Ginger_আদা.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const AdaInfo = () => {

    // dynamic title
    useDocumentTitle("আদা");

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
                আদা
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ada} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text fw-bold">উপযুক্ত জমি ও মাটিঃ</p>
                            <p className="card-text">পানি নিকাশের সুব্যবস্থা  আছে এমন উঁচু বেলে-দো-আঁশ ও ও বেলে মাটি আদা চাষের জন্য উপযোগী।</p>

                            <p className="card-text fw-bold">বীজ রোপণ:</p>
                            <p className="card-text">ফাল্গুন থেকে বৈশাখ মাস পর্যন্ত  লাগানো যায়। সাধারণত ১২-১৫ গ্রাম ওজনের ১-২টি কুঁড়ি বিশিষ্ট কন্দ লাগানো হয়। ৪০-৪৫ সে.মি. দূরে দূরে সারি করে ২০ সে.মি. দূরে ৫ সে.মি. গভীরে আদা লাগানো হয়। কন্দ লাগানো পর ভেলী করে দিতে হয়। প্রতি হেক্টরে ১০০০ কেজি বীজের প্রয়োজন হয়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">সার ব্যবস্থাপনাঃ</p>
                <p className="card-text">আদার ভাল ফলন পেতে হলে জমির উর্বরতার উপর নির্ভর করে প্রতি হেক্টরে গোবর সার ৪-৬ টন, ইউরিয়া ২০০-২৪০ কেজি, টিএসপি ১৭০-১৯০ কেজি, এমওপি ১৬০-১৮০ কেজি প্রয়োগ করতে হয়। জমি প্রস্তু'তির সময় সমুদয় গোবর, টিএসপি ও ৮০-৯০ কেজি এমওপি সার প্রয়োগ করতে হয়। কন্দ লাগানোর ৫০ দিন পর ১০০-১২০ কেজি হারে ইউরিয়া সার উপরি প্রয়োগ করা হয়। লাগানোর ৯০ দিন ও ১২০ দিন পর যথাক্রমে ২য় ও ৩য় কিস্তি-র সার উপরি প্রয়োগ করা হয়। ভেলা সামান্য কুপিয়ে ১ম কিস্তি-র সার প্রয়োগ করে আবার ভেলা করে দিতে হয়। ২য় ও ৩য় কিস্তি-র উপরি প্রয়োগের সময় প্রতি হেক্টরে প্রতিবারে ৫০-৬০ কেজি ইউরিয়া ও ৪০-৪৫ কেজি এমওপি সার প্রয়োগ করা হয়। ২য় ও ৩য় কিস্তি-র সার সারির মাঝে প্রয়োগ করে মাটি কোঁদাল দিয়ে কুপিয়ে মাটির সাথে মিশিয়ে সামান্য পরিমাণ মাটি ভেলীতে দিতে হয়।</p>

                <p className="card-text fw-bold">জাত পরিচিতিঃ</p>
                <p className="card-text">অনুমোদিত কোন জাত নেই। তবে স্থানীয় জাত যেমন-রংপুরী, খুলনা, টেংগুরা জাত চাষ করা হয়।</p>

                <p className="card-text fw-bold">রোগ ব্যবস্থাপনা:</p>
                <p className="card-text fw-bold">রোগের নাম : রাইজম রট</p>
                <p className="card-text"><b>রোগের কারণ : </b>পিথিয়াম এফানিডারমেটাম নামক ছত্রাক ।</p>

                <p className="card-text fw-bold">ভূমিকা : </p>
                <p className="card-text">এ রোগ রাইজমে আক্রমণ করে বলে আদা বড় হতে পারে না ও গাছ দ্রত মরে যায় ফলে সমূহ ক্ষতির সম্ভাবনা থাকে।</p>

                <p className="card-text fw-bold">ক্ষতির নমুনা : </p>
                <p className="card-text">- প্রথমে পাতা হলুদ হয়ে যায় কিন্তু' পাতায় কোন দাগ থাকে না।<br />
                    - পরবর্তীতে গাছ ঢলে পড়ে ও শুকিয়ে মরে যায়।<br />
                    - রাইজম (আদা) পচে যায় ও ফলন মারাত্মক ভাবে কমে যায় ।</p>

                <p className="card-text fw-bold">অনুকুল পরিবেশ :  </p>
                <p className="card-text">ভেজা ও স্যাঁত স্যাঁতে আবহাওয়ায় এ রোগ বেশী দেখা যায়। বর্ষাকাল বা জলাবদ্ধতা থাকলে এ রোগের প্রকোপ বেড়ে যায়।</p>
                <p><b>বিস্তার : </b>এ রোগ বীজ, পানি ও মাটির মাধ্যমে বিস্তার লাভ করে।</p>

                <p className="card-text fw-bold">ব্যবস্থপনা :</p>
                <p className="card-text">
                    - অর্ধপচা মুরগীর বিষ্ঠা প্রতি হেক্টরে ১০ টন হারে আদা লাগানোর ২১ দিন পূর্বে মাটিতে প্রয়োগ করতে হবে।<br />
                    - অনুমোদিত ছত্রাক নাশক মাটি হালকা কুপিয়ে মাটিতে স্প্রে করতে হবে।</p>
                <p><b>পুষ্টিমূল্যঃ</b> আদায় ক্যালসিয়াম ও প্রচুর ক্যারোটিন থাকে।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহঃ</p>
                <p className="card-text">আদা লাগানোর ৯-১০ মাস পর উঠানোর উপযোগী হয়। গাছের প্রায় সব পাতা শুকিয়ে গেলে আদা তোলা হয়। ফলন প্রতি হেক্টরে ১২-১৩ টন।</p>


            </div>
        </div >


    );
};

export default AdaInfo;