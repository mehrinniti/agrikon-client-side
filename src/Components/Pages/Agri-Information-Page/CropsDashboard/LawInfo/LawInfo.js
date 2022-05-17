import React from 'react';
import { Divider, Typography } from '@mui/material';
import law from '../../../../../images/Agri-info/crops/Low_লাউ.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const LawInfo = () => {

    // dynamic title
    useDocumentTitle("লাউ");

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
                লাউ
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={law} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>লাউ প্রায় সব ধরনের মাটিতে জন্মে। তবে প্রধানত দোআঁশ থেকে এটেঁল দোআঁশ মাটি লাউ চাষের জন্য উত্তম। <br />লাউ সাধারণত দিবস নিরপেক্ষ লতানো উদ্ভিদ, ফলে বছরের অধিকাংশ সময় চারা লাগিয়ে ফসল উৎপাদন করা যায়।</p>

                            <p className="card-text fw-bold">বীজ বপন ও চারা উৎপাদন</p>
                            <p className="card-text">লাউ চায়ের জন্য পলিথিন ব্যাগে চারা তৈরী করাই উত্তম। এতে বীজের খরচ কম পড়ে। পলিথিন ব্যাগে চারা উৎপাদন করে রোপণ করলে হেক্টরপ্রতি ৮০০-১০০০ গ্রাম বীজের প্রয়োজন হয়। </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">বীজ বপনের সময়</p>
                <p className="card-text">শীতকালীন চাষের জন্য মধ্য-ভাদ্র থেকে মধ্য-কার্তিক (সেপ্টেম্বর-অক্টোবর) মাসে বীজ বপন করা যেতে পারে। তবে আগাম শীতকালীন ফসলের জন্য ভাদ্রের ১ম সপ্তাহে বীজ বুনতে হবে। </p>

                <p className="card-text fw-bold">জমি তৈরী </p>
                <p className="card-text">আমাদের দেশে প্রধানত বসতবাড়ির আশে পাশে যেমন-গোয়াল ঘরের কিনারায় বা পুকুর পাড়ে ২-৩টি লাউ গাছ লাগানো হয়ে থাকে। বেশী পরিমাণ জমিতে লাউয়ের চাষ করতে হলে প্রথমে জমি ভালোভাবে চাষ ও মই দিয়ে প্রস্তুত করতে হবে। </p>

                <p className="card-text fw-bold">চারা রোপণ </p>
                <p className="card-text">লাউ চাষের জন্য ২x২ মি. দূরত্বে প্রতি মাদায় ৪-৫টি বীজ বোনা উচিত। রবি মৌসুমে লাউ মাচা বিহনী অবস্থায় ও চাষ করা যায়। তবে মাচায় ফলন বেশী হয়। এছাড়া পানিতে ভাসমান কচুরীপানার স্থুপে মাটি দিয়ে বীজ বুনেও সেখানে লাউ জন্মানো যেতে পারে। </p>

                <p className="card-text fw-bold">অন্তর্বর্তীকালীন পরিচর্যা</p>
                <p className="card-text">নিয়মিত গাছের গোড়ায় পানি সেচ দেওয়া, মাটির চটা ভাঙ্গা, বাউনী দেওয়া ও অন্যান্য পরিচর্চা করা বাঞ্চনীয়। মাচা শক্ত করে বাধঁতে হবে।</p>

            </div>
        </div >

    );
};

export default LawInfo;