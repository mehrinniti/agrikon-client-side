import React from 'react';
import { Divider, Typography } from '@mui/material';
import gajor from '../../../../../images/Agri-info/crops/Carrot_গাজর.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const GajorInfo = () => {

    // dynamic title
    useDocumentTitle("গাজর");

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
                গাজর
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={gajor} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>ভিটামিন এ সমৃদ্ধ পুষ্টিকর সবজি। তাছাড়া এতে ক্যালসিয়াম, লৌহ, ফসফরাস, শ্বেতসার এবং অন্যান্য ভিটামিন যথেষ্ট পরিমাণে রয়েছে। তরকারী ও সালাদ হিসেবে গাজর খাওয়া যায়। গাজরের হালুয়া অনেকের প্রিয় খাবার। দেশে গাজরের কোন অনুমোদিত জাত নেই। বিদেশ থেকে বিভিন্ন জাতের গাজরের বীজ আমদানি করে চাষ করা হয়। যেমন-রয়েল ক্রস, কোরেল ক্রস, কিনকো সানটিনে রয়েল ও স্কারলেট নান্টেস। </p>

                            <p className="card-text fw-bold">চাষ পদ্ধতি</p>
                            <p className="card-text fw-bold">মাটি</p>
                            <p className="card-text">পানি নিষ্কাশনের ব্যবস্থা আছে এমন বেলে দোঁআশ ও দোআঁশ মাটি গাজর চাষের জন্য উপযোগী।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">বীজ বপন সময়</p>
                <p className="card-text">আশ্বিন থেকে কার্তিক মধ্য সেপ্টেম্বর মধ্য নভেম্বর মাস বীজ বপনের উত্তম সময়।</p>

                <p className="card-text fw-bold">বীজ হার </p>
                <p className="card-text">প্রতি হেক্টরে ৩-৪ কেজি বীজ লাগে। </p>

                <p className="card-text fw-bold">বীজ বপনের দূরত্ব </p>
                <p className="card-text">
                    <b>সারি-সারির দূরত্বঃ </b>২০-২৫ সেমি<br />
                    <b>গাছ-গাছের দূরত্বঃ </b>১০ সেমি</p>

                <p className="card-text fw-bold">জমি তৈরী</p>
                <p className="card-text">
                    ১) গাজর চাষের জন্য ভালভাবে চাষ ও মই দিয়ে তৈরী করতে হবে। <br />
                    ২) জমির মাটি ঝুরঝুরে করে তৈরী করতে হবে। <br />
                    ৩) গাজরের বীজ সারিতে বপন করা ভাল। এতে গাজরের যত্ন নেয়া সহজ হয়। <br />
                    ৪) গাজরের বীজ খুব ছোট বিধায় ছাই বা গুড়া মাটির সাথে মিশিয়ে বপন করা ভাল। <br />
                    এজন্য ভাল বীজের সাথে ভাল শুকনা ছাই বা গুড়া মাটি মিশিয়ে বপন করা যেতে পারে। </p>

                <p className="card-text fw-bold">সার প্রয়োগ পদ্ধতি </p>
                <p className="card-text">
                    ১) সম্পূর্ণ গোবর ও টিএসপি এবং অর্ধেক ইউরিয়া ও এমপি সার জমি তৈরির সময় প্রয়োগ করতে হবে। <br />
                    ২) বাকি অর্ধেক ইউরিয়া সমান দুই কিসিৱতে চারা গজানোর ১০-১২দিন ও ৩৫-৪০ দিন পর উপরি প্রয়োগ করতে হবে।<br />
                    ৩) বাকি অর্ধেক এমপি সার চারা গজানোর ৩৫-৪০ দিন পর উপরি প্রয়োগ করতে হবে। </p>

                <p className="card-text fw-bold">পরিচর্যা</p>
                <p className="card-text">
                    মাটিতে রস কম হলে পানি সেচ দিতে হবে। <br />
                    সেচের পর জো এলে নিড়ানি দিয়ে চটা ভেঙ্গে মাটি আলগা করে দিতে হবে। আগাছা জন্মালে দমন করতে হবে।</p>

                <p className="card-text fw-bold">পোকা দমন</p>
                <p className="card-text fw-bold">জাব পোকা</p>
                <p className="card-text">
                    ১) এ পোকা ও গাছের কচি অংশের রস শুষে খেয়ে গাছের সমূহ ৰতি করে। <br />
                    ২) পোকা দমনের জন্য ২.৫ মিলি সাইফানন বা সেমটঙ ৫৭ ইসি ১ লিটার পানির সাথে মিশিয়ে সেপ্র করতে হবে। <br />
                    ৩)অথবা রগোর এল -৪০, ক্লাসিক ২০ ইসি, টিডফেট ৭৫ এসপি, টিডো ২০ এসএল ইত্যাদি কীটনাশকের যে কোন একটি অনুমোদিত মাত্রায় ব্যবহার করা যেতে পারে। <br />
                    ৪) অথবা, বাইকাও-১ প্রয়োগ করতে হবে। </p>

                <p className="card-text fw-bold">ফসল সংগ্রহ </p>
                <p className="card-text">চারা গজানোর ৭০-৮০ দিন পর সবজি হিসেবে গাজর খাওয়ার জন্য তোলার উপযুক্ত হয়। </p>

                <p className="card-text fw-bold">ফলন</p>
                <p className="card-text">হেক্টরপ্রতি গাজরের ফলন ২০-২৫ টন।</p>

            </div>
        </div >


    );
};

export default GajorInfo;