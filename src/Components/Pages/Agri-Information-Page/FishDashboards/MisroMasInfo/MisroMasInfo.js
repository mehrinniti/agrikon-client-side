import React from 'react';
import { Divider, Typography } from '@mui/material';
import misroMas from '../../../../../images/Agri-info/fish/misromas_মিশ্র মাছ চাষ.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const MisroMasInfo = () => {

    // dynamic title
    useDocumentTitle("মিশ্র মাছ");

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
                মিশ্র মাছ
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={misroMas} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <h4><b>মিশ্র মাছ চাষ</b></h4>
                            <p className="card-text"><b>রুইজাতীয় মাছের সাথে মলা-পুঁটির মিশ্র চাষ <br /><br />পুকুর/মৌসুমী জলাশয় নির্বাচন</b><br />
                                •    দো-আঁশ ও এঁটেল দোআঁশ মাটির পুকুর ভালো।<br />
                                •    পুকুর/জলাশয় বন্যামুক্ত এবং মাঝারী আকারের হলে ভালো হয়।<br />
                                •    পর্যাপ্ত সূর্যের আলো পড়ে এমন পুকুর নির্বাচন করা উচিত।<br />
                                •    পানির গভরীতা ১-১.৫ মিটার হলে ভালো হয়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>পুকুর প্রস্তুতি</b><br />
                    •    পাড় মেরামত ও আগাছা পরিষ্কার করতে হবে।<br />
                    •    রাক্ষুসে ও ক্ষতিকর প্রাণী অপসারণ করতে হবে।<br />
                    •    শতাংশে ১ কেজি করে চুন প্রয়োগ করতে হবে।<br />
                    •    চুন প্রয়োগের ৭-৮ দিন পর শতাংশ প্রতি ৫-৭ কেজি গোবর ১০০ গ্রাম ইউরিয়া ও ৫০ গ্রাম টিএসপি সার দিতে হবে।</p>
                <p className="card-text"><b>পোনা মজুদ, খাদ্য ও সার প্রয়োগ</b><br />
                    •    শতাংশ প্রতি ১০-১৫ সে. মি. আকারের ৩০-৩২ টি র্বই জাতীয পোনা এবং ৫-৬ সে. মি. আকারের ৬০ টি মলা ও ৬০ টি পুটি</p>
                <p className="card-text"><b>মাছ মজুদ করা যায়।</b><br />
                    •    মাছের পোনা মজুদের পরদিন থেকে পোনার দেহের ওজনের শতকরা ৫-১০ ভাগ হারে সম্পুরক খাবার হিসেবে খৈল, কুড়া, ভূষি দেয়া যেতে পারে।<br />
                    •    গ্রাস কার্পের জন্য কলাপাতা, বাধা কপির পাতা, নেপিয়ার বা অন্যান্য নরম ঘাস দেয়া যেতে পারে।<br />
                    •    মলা-পুঁটি মাছের জন্য বাড়তি খাবার দরকার নাই।<br />
                    •    প্রাকৃতিক খাবার জন্মানোর জন্য পোনা ছাড়ার ১০ দিন পর শতাংশ প্রতি ৪-৬ কেজি গোবর, ১০০ গ্রাম ইউরিয়া সার প্রয়োগ করতে হবে।</p>
                <p className="card-text"><b>মাছ আহরণ</b><br />
                    •    পোনা মজুদের ২ মাস পর হতে ১৫ দিন পর পর বেড় জাল দিয়ে মলা-পুঁটি মাছ আংশিক আহরণ করতে হবে।<br />
                    •    ৭৫০-৮০০ গ্রাম থেকে বেশী ওজনের কাতল ও সিলভার কার্প মাছ আহরণ করে সমসংখ্যক ১০-১২ সে. মি. আকারের পোনা পুনরায় মজুদ করতে হবে।<br />
                    •    বছর শেষে চূড়ান্ত আহরণ করা যেতে পারে।</p>

            </div>
        </div >


    );
};

export default MisroMasInfo;