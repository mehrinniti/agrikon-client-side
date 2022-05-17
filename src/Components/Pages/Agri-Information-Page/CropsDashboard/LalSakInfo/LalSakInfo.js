import React from 'react';
import { Divider, Typography } from '@mui/material';
import lalSak from '../../../../../images/Agri-info/crops/lal shak_লালশাক.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const LalSakInfo = () => {

    // dynamic title
    useDocumentTitle("লালশাক");

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
                লালশাক
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={lalSak} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>লালশাক সবার কাছেই প্রিয় একটি পুষ্টিকর শাক। এটা দেখতে যেমন সুন্দর তেমন খেতেও সুস্বাদু। সারা বছরই এ শাক পাওয়া যায়।</p>

                            <p className="card-text fw-bold">মাটি</p>
                            <p className="card-text">বেলে দোঁ-আশ থেকে এঁটেল দোঁ-আশ মাটি এবং যেখানে পানি জমে না এমন জমিই চাষের জন্য সবচেয়ে উপযোগী।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">জাত</p>
                <p className="card-text">আলতা পেটি ২০, রক্ত লাল, বারি লালশাক ১, ললিতা, রক্তরাঙ্গা, পিংকি কুইন, রক্তজবা ও স্থানীয় জাত।</p>

                <p className="card-text fw-bold">সময়</p>
                <p className="card-text">সারা বছরই লাল শাক আবাদ করা যায়। তবে ভাদ্র-পৌষ পর্যন্ত বেশী চাষ হয়।</p>

                <p className="card-text fw-bold">বীজবপন</p>
                <p className="card-text">ছিটিয়ে অথবা লাইনে বীজ বোনা যায়।</p>


                <p className="card-text fw-bold">বীজের পরিমাণ</p>
                <p className="card-text fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;এক শতকে   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; হেক্টর প্রতি  </p>
                <p>সারিতে &nbsp;&nbsp;&nbsp; ১০০ গ্রাম       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ১-১.৫ কেজি </p>
                <p>ছিটিয়ে &nbsp;&nbsp;&nbsp;&nbsp;  ১৫০ গ্রাম        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ২-২.৫ কেজি</p>

                <p className="card-text fw-bold">বীজবপন পদ্ধতি</p>
                <p className="card-text">জমি ভাল করে চাষ ও মই দিয়ে সমান করার পর ১ ভাগ বীজের সাথে ৯ ভাগ শুকনা ছাই মিশিয়ে হালকা ভাবে ছিটিয়ে লাল শাকের বীজ বুনতে হয়। লাইন করে অথবা সারি করে বুনতে হলে ১৫ থেকে ২০ সেন্টমিটার দূরে দূরে কাঠি দিয়ে ১.৫ থেকে ২.০ সেন্টিমিটার পর্যন্ত গভীর করে বীজ বুনতে হয়। পরে তা মাটি দিয়ে ঢেকে দিতে হবে।</p>

                <p className="card-text fw-bold">সার প্রয়োগের নিয়ম</p>
                <p className="card-text">সব সার বীজ বোনার আগেই মাটির সাথে ভালভাবে মিশিয়ে দিতে হবে।</p>

                <p className="card-text fw-bold">পরিচর্যা</p>
                <p className="card-text">ঘন জায়গা থেকে চারা তুলে পাতলা করে দিতে হবে। ছিটিয়ে বোনা হলে প্রতি বর্গমিটারে ১০০ থেকে ১৪০ টি গাছ রাখতে হবে। সারিতে বোনা হলে প্রতি লাইনে ৫ সেন্টিমিটার দূরে দূরে গাছ রাখতে হয়। ৪-৫ দিন পর পর সেচ দিতে পারলে ভাল। তাছাড়া পরিস্কার করে সময়মত মাটি আলগা করে দিতে হবে।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহ</p>
                <p className="card-text">বীজ বোনার ৩০ থেকে ৪০ দিনের মধ্যে শাক খাওয়ার উপযুক্ত হয়। একসাথে শাক সংগ্রহ না করে ধীরে ধীরে সংগ্রহ করা ভালো।</p>

                <p className="card-text fw-bold">ফলন</p>
                <p className="card-text">প্রতি শতকে ৩০-৪০ কেজি, হেক্টর প্রতি ৫-৬ টন।</p>

            </div>
        </div >

    );
};

export default LalSakInfo;