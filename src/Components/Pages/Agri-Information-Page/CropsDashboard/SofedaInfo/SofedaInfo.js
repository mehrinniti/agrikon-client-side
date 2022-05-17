import React from 'react';
import { Divider, Typography } from '@mui/material';
import sofeda from '../../../../../images/Agri-info/crops/sofeda_সফেদা.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const SofedaInfo = () => {

    // dynamic title
    useDocumentTitle("সফেদা");

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
                সফেদা
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={sofeda} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>পুষ্টি মূল্য : </b><br />সফেদা বিভিন্ন খনিজ পদার্থ এবং ভিটামিন এ এবং সি সমৃদ্ধ একটি ফল।</p>
                            <p className="card-text"><b>ভেষজ গুণ: </b><br />ফলের শীতল পানীয় বা শরবত জ্বর নাশক হিসেবে কাজ করে। ফলের খোসা শরীরের ত্বক ও রক্তনালী দৃঢ় করে রক্তক্ষরণ বন্ধে সাহায্য করে।</p>
                            <p className="card-text"><b>উপযুক্ত জমি ও মাটি: </b><br />উঁচু নিকাশযুক্ত বেলে দোআঁশ ও দোআঁশ মাটি বেশি উপযোগি। </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p><b>জাত পরিচিতি:</b></p>
                <p className="card-text"><b>বারি সফেদা-১:</b>ফল দেখতে গোলাকার চেপ্টা। আকারে বেশ বড়। কম বেশি সারা বছরই ফল ধরে। প্রতিটি ফলের ওজন ৮০-৯০ গ্রাম। প্রধানত চট্টগ্রাম এলাকায় সফেদা ভাল জন্মে। তবে অন্যঅন্য এলকাতেও এর চাষ করা যায়।</p>
                <p className="card-text"><b>বারি সফেদা-২: </b>এ জাতটি দেশের মধ্যাঞ্চল বিশেষ করে ঢাকা, টাঙ্গাইল, গাজীপুর ও নরসিংদী এলাকায় ভাল হলেও দেশের অন্যান্য এলাকাতেও চাষ করা যায়। ফলের গড় ওজন ৭০-১০০ গ্রাম। পাকা ফলের শাঁস লালচে বাদামী বর্ণের মোলায়েম, খেতে মিষ্টি ও সুস্বাদু।</p>
                <p className="card-text"><b>চারা রোপণ: </b>জ্যৈষ্ঠ - শ্রাবণ মাস চারা রোপণের সবচেয়ে উপযুক্ত সময়।</p>
                <p className="card-text"><b>সার ব্যবস্থাপনা: </b>প্রতি গর্তে  গোবর ১৫ কেজি, টিএসপি সার ২৫০ গ্রাম, এমওপি সার ২৫০ গ্রাম প্রয়োগ করতে হবে।</p>
                <p className="card-text"><b>সেচ ও আগাছা ব্যবস্থাপনা: </b>সফেদা গাছ খরা সহ্য করতে পারে, তবে বেশি খরার সময় প্রয়োজনীয় সেচ দিলে ফলন ভাল হয়।</p>
                <p className="card-text"><b>ফসল তোলা: </b>ফল বাত্তি হওয়ার শক্ত অবস্থায় ফল সংগ্রহ করতে হয়।</p>

            </div>
        </div >

    );
};

export default SofedaInfo;