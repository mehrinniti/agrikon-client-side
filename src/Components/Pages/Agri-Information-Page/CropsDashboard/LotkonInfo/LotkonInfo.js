import React from 'react';
import { Divider, Typography } from '@mui/material';
import lotkon from '../../../../../images/Agri-info/crops/lotkon_লটকন.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const LotkonInfo = () => {

    // dynamic title
    useDocumentTitle("লটকন");

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
                লটকন
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={lotkon} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>লটকনের চাষ প্রণালী</b><br />লটকন বাংলাদেশের অতি সুপরিচিত ফল। ফল গোলাকার ও পাকা অবস্থায় হলুদ। ফলের খোসা নরম ও পুরু। প্রতি ফলে তিনটি করে বীজ থাকে। উৎপাদনের পরিমাণ বেশি না হলেও দেশের সব এলাকাতেই এর চাষ হয়। নরসিংদী, মানিকগঞ্জ, গাজীপুর নেত্রকোণা ও সিলেট এলাকায় লটকন চাষ বেশি হয়।</p>
                            <p className="card-text"><b>লটকনের ওষুধিগুণ</b><br />
                                ১.    লটকন অম্লমধুর ফল।<br />
                                ২.    লটকন খাদ্যমানেও সমৃদ্ধ।<br />
                                ৩.    ফল খেলে বমি বমি ভাব দূর হয় ও  নিবারন হয়।<br />
                                ৪.    শুকনো গুঁড়ো পাতা খেলে ডায়রিয়া ও মানসিক চাপ কমায়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>চাষ পদ্ধতি <br />মাটি</b><br />
                    ১.    শুনিকাশযুক্ত প্রায় সব ধরণের মাটিতেই লটকনের চাষ করা যায়।<br />
                    ২.    তবে বেলে দো-আঁশ মাটি সবচেয়ে উপযোগী।<br />
                    ৩.    উঁচু ও মাঝারি উঁচু জমি এবং উন্মুক্ত বা আংশিক ছায়া চাষ করা যায়।</p>
                <p className="card-text"><b>চারা রোপণের সময়</b><br />
                    ১.    বৈশাখ-জ্যৈষ্ঠ মাস গাছ রোপণের উপযুক্ত সময়<br />
                    ২.    তবে বর্ষার শেষের দিকে অর্থাৎ ভাদ্র-আশ্বিন মাসেও গাছ লাগানো যায়।</p>
                <p className="card-text"><b>রোপণের দূরত্ব</b><br />
                    ১.    সারি থেকে সারির দূরত্ব : ৬ মিটার<br />
                    ২.    চারা থেকে চারার দূরত্ব : ৬ মিটার</p>
                <p className="card-text"><b>গর্ত তৈরি</b><br />
                    ১.    গর্তের আকার হবে ৯০ সেমি<br />
                    ২.   গর্ত করার ১০-১৫ দিন পর প্রতি গর্তে নিম্নরূপ হারে সার প্রয়োগ করে মাটির সঙ্গে ভালভাবে মিশিয়ে গর্ত ভরাট করতে হবে।</p>
                <p className="card-text"><b>চারা রোপণ ও পরিচর্যা</b><br />
                    ১.    সাধারণত বীজ দিয়ে লটকনের বংশ বিস্তার করা যায়।<br />
                    ২.    সমতল জমিতে বর্গাকার বা আয়তাকার পদ্ধতিতে লটকনের চার লাগানো যেতে পারে।<br />
                    ৩.   গর্ত ভর্তি করার ১০-১৫ দিন পর গর্তের মাঝখানে নির্বাচিত চারা সোজাভাবে লাগিয়ে চারদিকে মাটি দিয়ে চেপে দিতে হবে।<br />
                    ৪.    চারা লাগানোর পর পর পানি দিতে হবে।<br />
                    ৫.    প্রতি ১-২ দিন অন্তর পানি দিতে হবে।<br />
                    ৬.    প্রয়োজনবোধে বাঁমের খুঁটি ও বেড়ার ব্যবস্থা করতে হবে।</p>
                <p className="card-text"><b>সেচ</b><br />
                    ১.  চারা রোপণের প্রথম দিকে ঘন ঘন সেচ দেয়া দরকার<br />
                    ২.  ফল ধরার পর দু’একটা সেচ দিতে পারলে উপকার পাওয়া যায়।</p>
                <p className="card-text"><b>ডাল ছাঁটাই</b><br />
                    ১.  গাছের মরা, রোগাক্রান্ত ও কীটাক্রান্ত ডাল ছাঁটাই করে দিতে হবে।</p>
                <p className="card-text"><b>ফল সংগহ</b><br />শীতের শেষে গাছে ফুল আসে। আষাঢ়-শ্রাবণ মাসে ফল পাকে।</p>

            </div>
        </div >

    );
};

export default LotkonInfo;