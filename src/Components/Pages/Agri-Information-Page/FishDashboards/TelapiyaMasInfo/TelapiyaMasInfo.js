import React from 'react';
import { Divider, Typography } from '@mui/material';
import telapiyaMas from '../../../../../images/Agri-info/fish/Talapia-e fish_তেলাপিয়া মাছ.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const TelapiyaMasInfo = () => {

    // dynamic title
    useDocumentTitle("তেলাপিয়া মাছ");

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
                component="div"
            >
                তেলাপিয়া মাছ
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={telapiyaMas} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text">তেলাপিয়া বর্তমানে বাংলাদেশের মৎস্য চাষে একটি গুরুত্বপূর্ণ স্থান দখল করে আছে। স্থানীয় বাজারে চাহিদা ও এর উচ্চ বাজার মূল্যের জন্য খামারীরা বর্তমানে অধিক হারে এ মাছ চাষ করছে। প্রাকৃতিক খাবার গ্রহণের দক্ষতা, সম্পূরক খাবারের প্রতি আগ্রহ, বিরূপ প্রাকৃতিক পরিবেশে টিকে থাকা ও অধিক রোগ প্রতিরোধ ক্ষমতার কারণে চাষিদের কাছে এর জনপ্রিয়তা ও দিন দিন বাড়ছে। তাছাড়া বর্তমানে আন্তর্জাতিক বাজারে ও এর চাহিদা দিন দিন বৃদ্ধি পাচ্ছে। তেলাপিয়া মাছ  ১২-৪০ ডিগ্রী সেন্টিগ্রেড তাপমাত্রায় টিকে থাকে এবং ১৬-৩৫ ডিগ্রী সেন্টিগ্রেড তাপমাত্রায় বৃদ্ধি প্রাপ্ত হয়। বাংলাদেশের জলবায়ুতে একই পুকুরে কমপক্ষে ২ বার মনোসেক্স তেলাপিয়ার চাষ করা যায়। ভবিষ্যতে আমাদের চাষ পদ্ধতি ও উৎপাদন ব্যবস্থার উন্নয়ন করা গেলে তেলাপিয়া মাছের বিশাল আন্তর্জাতিক বাজারে বাংলাদেশ স্থান করে নিতে পারবে। তাই আমাদের দেশে মনোসেক্স তেলাপিয়া চাষের বেশ উজ্জল সম্ভাবনা রয়েছে ।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>মনোসেক্স তেলাপিয়া মাছের গুরুত্ব:</b><br />
                    • এ মাছ দ্রুত বেড়ে ওঠে;<br />
                    • উচ্চ রোগ প্রতিরোধ ক্ষমতা সম্পন্ন এবং প্রতিকূল পরিবেশে টিকে থাকতে পারে;<br />
                    • এ মাছের চাষাবাদ ব্যবস্থাপনা সহজতর। মনোসেক্স তেলাপিয়া শুধুমাত্র পুরুষ তেলাপিয়া হওয়ায় স্ত্রী তেলাপিয়ার অভাবে প্রজনন সম্পন্ন করতে পারে না। ফলে পুকুরে বাচ্চা হয় না এবং চাষে কোন বিঘ্ন ঘটে না।<br />
                    • সম্পূরক খাবার দিয়ে অধিক ঘনত্বে চাষ করা যায়।</p>
                <p className="card-text"><b>মনোসেক্স তেলাপিয়ার চাষ পদ্ধতি:</b><br />মনোসেক্স তেলাপিয়া দুই ধাপে অর্থাৎ নার্সারি ও মজুদ পুকুরে চাষ করা হয়। এতে করে কম সময়ে একই পুকুর হতে অনেক বেশি উৎপাদন পাওয়া সম্ভব।</p>
                <p className="card-text"><b>নার্সারি পুকুর নির্বাচন:</b><br />
                    দেড় ফুট থেকে চার ফুট গভীরতার পুকুর তেলাপিয়া নার্সারির জন্য অত্যন্ত উপযোগী। পুকরে নির্বাচনের সময় খেয়াল রাখতে হবে-<br />
                    • পুকুরের পাড়সমূহ যেন মজবুত ও বন্যামুক্ত থাকে;<br />
                    • পুকুরে পর্যাপ্ত সূর্যের আলো পড়ে;<br />
                    • পুকুরটি যেন জলজ আগাছামুক্ত থাকে।</p>
                <p className="card-text"><b>মজুদ পুকুর ব্যবস্থাপনা:</b><br />

                    • মজুদ পুকুরের গভীরতা কোন সমস্যা নয়। ফলে বেশি গভীরতার পুকুরকেও তেলাপিয়া মাছ চাষে ব্যবহার করা যায়।<br />
                    • প্রথমেই সম্পূর্ণ পুকুর শুকিয়ে অথবা বারবার জাল টেনে কিংবা রোটেনন ওষুধ প্রয়োগ করে রাক্ষুসে ও অবাঞ্ছিত মাছ দূর করে নিতে হবে;<br />
                    • এরপর প্রতি শতকে ১ কেজি চুন, ৫-৭ কেজি গোবর, ১০০-১৫০ গ্রাম ইউরিয়া, ৫০-৭৫ গ্রাম টিএসপি ও ২০ গ্রাম এমওপি সার প্রয়োগ করতে হবে;<br />
                    • সার দেয়ার ৫-৭ দিন পর যখন পুকুরে পর্যাপ্ত প্রাকৃতিক খাবার তৈরি হবে তখন নার্সারি পুকুরে উৎপাদিত ২০-২৫ গ্রাম ওজনের পোনা থেকে প্রতি শতকে ২০০-২৫০ টি হারে পোনা মজুদ করতে হবে;<br />
                    • পুকুরে প্রাকৃতিক খাবারের যাতে অভাব না হয় সেজন্য প্রতি ৭ দিন পরপর প্রতি শতকে ৪-৫ কেজি গোবর, ২-৩ কেজি মুরগীর বিষ্ঠা, ৩৫ গ্রাম ইউরিয়া ও ২০ গ্রাম টিএসপি সার দিতে হবে। তবে পরবর্তীতে খাবার প্রয়োগের পরিমান বেড়ে গেলে সার প্রয়োগ বন্ধ করে দিতে হবে।<br />
                    • মাছের গড় ওজন যখন ১০০ গ্রামের বেশি হয় তখন থেকেই দৈনিক ৫% হারে পুকুরের পানি পরিবর্তন করে দিলে ভাল ফল পাওয়া যায়।<br />
                    • মজুদের ১০০-১২০ দিন পর থেকে মাছের গড় ওজন ২০০-২৫০ গ্রাম হয়ে যায়। তখন থেকেই মাছ বিক্রি করা যেতে পারে। যখন মাছের গড় ওজন ৩০০-৫০০ গ্রাম হয় তখন বাজারের চাহিদার ওপর ভিত্তি করে সব মাছ ধরে ফেলতে হয়।</p>
                <p className="card-text"><b>শেষ কথা:</b><br />
                    বর্তমানে পৃথিবীব্যাপী মনোসেক্স তেলাপিয়া মাছেল বাজার সম্প্রসারিত হচ্ছে। আমাদের দেশের প্রকৃতি ও আবহাওয়া মনোসেক্স তেলাপিয়া চাষের জন্য খুবই উপযোগী। তাছাড়া চাষে কম সময়, সম্পূরক খাদ্য গ্রহণে অভ্যস্থতা, দ্রুত বেড়ে ওঠার ক্ষমতা, সর্বোপরি বাজার মূল্য বেশি থাকায় বর্তমানে অধিকাংশ মৎস্য চাষি মনোসেক্স তেলাপিয়া চাষে এগিয়ে আসছেন।</p>
                <p>আমিষের চাহিদা পূরণ করে অর্থনৈতিকভাবে সাবলম্বি হতে মনোসেক্স তেলাপিয়া চাষ উন্মোচন করতে পারে সম্ভাবনা নতুন দুয়ার।</p>

            </div>
        </div >


    );
};

export default TelapiyaMasInfo;