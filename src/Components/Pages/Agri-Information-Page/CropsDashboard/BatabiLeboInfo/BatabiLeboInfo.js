import React from 'react';
import { Divider, Typography } from '@mui/material';
import batabiLebo from '../../../../../images/Agri-info/crops/batabinebu_বাতাবি লেবু.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const BatabiLeboInfo = () => {

    // dynamic title
    useDocumentTitle("বাতাবি লেবু");

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
                বাতাবি লেবু
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={batabiLebo} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>পুষ্টি মূল্য : </b><br />ভিটামিন সি সমৃদ্ধ ফল।</p>
                            <p className="card-text"><b>ভেষজ গুণ: </b><br />পাতা, ফুল ও ফলের খোসা গরম পানিতে সিদ্ধ করে পান করলে মৃগী, হাতপা কাঁপা ও প্রচন্ড কাশি রোগীর প্রশানি- আনয়ন করে।</p>
                            <p className="card-text"><b>উপযুক্ত জমি ও মাটি: </b><br />দোআঁশ ও পলি মাটিতে বাতাবি লেবু চাষের জন্য উত্তম। মধ্যম অম্লীয় মাটিতে এ ফল ভাল জন্মে।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p><b>জাত পরিচিতি:</b></p>
                <p className="card-text"><b>বারি বাতাবি লেবু-১: </b> এ জাতের পাতা বড় আকৃতির গাঢ় সবুজ। নিয়মিত ফল ধরে। ফলের আকৃতি প্রায় গোলাকার। ফল সুস্বাদু ও তিতাবিহীন, বেশ রসালো, শাঁসের রং লালচে, বেশ নরম, মিষ্টতা মাঝারি। পাকা ফলের রং হলদে।</p>
                <p className="card-text"><b>বারি বাতাবি লেবু-২: </b> পাতা গাঢ় সবুজ, ডানাযুক্ত বৃত্তাকার। গাছে নিয়মিত ফল ধরে। ফল সুস্বাদু, বেশ রসালো, শাঁসের রঙ লালচে এবং বেশ মিষ্টি। শাঁস নরম এবং পাকা ফলের রঙ হলদে।</p>
                <p className="card-text"><b>বারি বাতাবি লেবু-৩: </b> গাছের আকার মাঝারি, পাতা গাঢ় সবুজ ও হৃদপিন্ডাকার ডানাযুক্ত, প্রতি বছর নিয়মিত ফল ধরে। পাকা ফলের খোসা হলদে বর্ণের। ফলের শাঁস অত্যন্ত রসালো,নরম, মিষ্টি, তিতাবিহীন, গোলাপী বর্ণের এবং খেতে সুস্বাদু।</p>
                <p className="card-text"><b>বারি বাতাবি লেবু-৪:  </b>গাছের আকৃতি ছাতার মতো। ফলের আকৃতি গোলাকার, মাঝারি ধরণের। ফল সুস্বাদু, বেশ রসালো, শাঁসের রঙ সাদা ও বেশ মিষ্টি। এটি একটি নাবী জাত।</p>
                <p className="card-text"><b>চারা তৈরি: </b>গুটি কলমের মাধ্যমে চারা তৈরি করা হয়।</p>
                <p className="card-text"><b>চারা রোপণ: </b><br />মধ্য বৈশাখ থেকে মধ্য আশ্বিন মাসে চারা রোপণ করতে হয়। লাইন থেকে লাইন এবং গাছ থেকে গাছের দূরত্ব ৫ মিটার রাখতে হয়।</p>
                <p className="card-text"><b>সার ব্যবস্থাপনা:</b><br />প্রতি গর্তে ইউরিয়া সার ২২৫ গ্রাম, টিএসপি সার ৯০ গ্রাম, এমওপি সার ১৬০ গ্রাম এবং গোবর ১১ কেজি প্রয়োগ করতে হয়।  তবে বয়স্ক গাছে সারের পরিমান বাড়াতে হয়। এ সার মধ্য মাঘ থেকে মদ্য পাল্গুণ, মধ্য বৈশাক থেকে মধ্য জৈষ্ঠ্য এবং মধ্য আশ্বিন থেকে মধ্য কার্তিক মাসে প্রয়োগ করতে হয়।</p>
                <p className="card-text"><b>সেচ ও আগাছা ব্যবস্থাপনা:</b><br />শুকনা মৌসুমে ২-৩ বার সেচ দিতে হয়। বর্ষার সময় গাছের গোড়ায় যাতে পানি জমে না থাকে সেজন্য পানি নিষ্কাশনের ব্যবস্থা রাখা দরকার। প্রতি বছর ফল আহরণের পর অবাঞ্ছিত ডারপালা ছাঁটাই করতে হয়।</p>
                <p className="card-text"><b>ফসল তোলা:</b><br />ফল কিছুটা হলদে বর্ণ ধারণ করলে ভাদ্রের প্রথম থেকে মধ্য আশ্বিন পর্যন্ত ফল সংগ্রহ করা যায়।</p>

            </div>
        </div >

    );
};

export default BatabiLeboInfo;