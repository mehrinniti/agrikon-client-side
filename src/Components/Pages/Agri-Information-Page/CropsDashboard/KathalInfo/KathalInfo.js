import React from 'react';
import { Divider, Typography } from '@mui/material';
import kathal from '../../../../../images/Agri-info/crops/jackfruit_কাঁঠাল.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const KathalInfo = () => {

    // dynamic title
    useDocumentTitle("কাঁঠাল");

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
                কাঁঠাল
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={kathal} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>পুষ্টি মূল্য : </b>আমিষ ও ভিটামিন এ সমৃদ্ধ।</p>
                            <p className="card-text"><b>ভেষজ গুণ: </b><br />কাঁঠালের শাঁস ও বীজকে চীন দেশে বলবর্ধক হিসেবে ব্যবহার করা হয়। কাঁঠালের শিকড়ের রস জ্বর ও পাতলা পায়খানা নিরাময়ে ব্যবহার করা হয়।</p>
                            <p className="card-text"><b>উপযুক্ত জমি ও মাটি: </b><br />পানি দাঁড়ায় না এমন উঁচু ও মাঝারি সুনিষ্কাষিত উর্বর জমি কাঁঠালের জন্য উপযোগি।</p>
                            <p className="card-text"><b>জাত পরিচিতি: </b><br />কাঁঠালের কোনো অনুমোদিত জাত নেই। তবে তিন ধরণের কাঁঠাল চাষ হয়-খাজা, আদারসা ও গালা।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>চারা তৈরি: </b><br />সাধারণত কাঁঠালের বীজ থেকেই চারা তৈরি করা হয়। ভাল পাকা কাঁঠাল থেকে পুষ্ট বড় বীজ বের করে ছাই মাকিয়ে ২/৩ দিন ছায়ায় শুকিয়ে বীজতলায় বপন করলে ২০-২৫ দিনে চারা গজাবে। জ্জ মাসের চারা সতর্কতার সাথে তুলে মূল জমিতে রোপণ করতে হয়। এছাড়া গুটি কলম, ডাল কলম, চোখ কলম, চারা কলম এর মাধ্যমেও চারা তৈরি করা যায়।</p>
                <p className="card-text"><b>চারা রোপণ:</b><br />ষড়ভূজী পদ্ধতিতে সুস', সবল ও রোগমুক্ত চারা বা কলম মধ্য জ্যৈষ্ঠ থেকে মধ্য শ্রাবণ মাসে রোপণ করতে হয়। গাছ ও লাইনের দূরত্ব ১২ মিটার করে রাখা দরকার।</p>
                <p className="card-text"><b>সার ব্যবস্থাপনা: </b><br />রোপণের সময় প্রতি গর্তে গোবর ৩৫ কেজি, টিএসপি সার ২১০ গ্রাম, এমওপি সার ২১০ গ্রাম সার প্রয়োগ করতে হয়। তবে বয়স বাড়ার সাথে সাথে প্রতি গাছের জন্র সারের পরিমান বৃদ্ধি করা দরকার।</p>
                <p className="card-text"><b>সেচ ও আগাছা ব্যবস্থাপনা: </b><br />চারা/ কলমের তাড়াতাড়ি বাড়বাড়তি হওয়ার জন্য পরিমিত ও সময় মতো সেচ প্রদান করা দরকার।</p>
                <p className="card-text"><b>পোকা মাকড় ব্যবস্থাপনা: <br />কাঁঠাল পচা রোগ: </b><br />এক ধরণের ছত্রাকের আক্রমণে এ রোগ হয। এ রোগের আক্রমণে কচ  ফলের গায়ে বাদমি রঙের দাগের সৃষ্টি হয় এবং শেষ পর্যন্ত আক্রান্ত ফল গাছ থেকে ঝড়ে পড়ে।</p>
                <p className="card-text"><b>প্রতিকার: </b><br />গাছের নিচে ঝড়ে পড়া পাতা ও ফল পুড়ে ফেলতে হয়। ফলিকুর ছত্রাকনাশক ০.০৫% হারে পানিতে মিশিয়ে গাছে ফুল আসার পর থেকে ১৫ দিন পর পর ৩ বার সেপ্র করা দরকার।</p>
                <p className="card-text"><b>মুচিঝরা রোগ: </b><br />ছত্রাকের আক্রমণের কারনে ছোট অবস্থাতেই কালো হয়ে ঝড়ে পড়ে।</p>
                <p className="card-text"><b>প্রতিকার: </b><br />ডাইথেন এম ৪৫ অথবা রিডোমিল এম জেড ৭৫, প্রতিলিটার পানিতে ২.৫ গ্রাম করে মিশিয়ে সেপ্র করতে হবে।</p>
                <p className="card-text"><b>ফসল তোলা: </b><br />ফল পাকতে ১২০-১৫০ দিন সময় লাগে। সাধারণত জ্যৈষ্ঠ- আষাঢ় মাসে কাঁঠাল সংগ্রহ করা হয়।</p>

            </div>
        </div >

    );
};

export default KathalInfo;