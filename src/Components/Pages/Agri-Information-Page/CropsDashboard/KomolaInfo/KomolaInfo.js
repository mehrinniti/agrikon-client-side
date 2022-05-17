import React from 'react';
import { Divider, Typography } from '@mui/material';
import komola from '../../../../../images/Agri-info/crops/Orange_কমলা.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const KomolaInfo = () => {

    // dynamic title
    useDocumentTitle("কমলা");

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
                কমলা
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={komola} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>পুষ্টি মূল্য : </b>এটি ভিটামিন সি সমৃদ্ধ ফল।</p>
                            <p className="card-text"><b>ভেষজ গুণ: </b><br />কমলা সর্দিজ্বর ও বমি নিবারক। কমলার শুকনো ছাল অম্লরোগ ও শারিরীক দুর্বলতা নিরসন করে।</p>
                            <p className="card-text"><b>ব্যবহার: </b>জ্যাম, জেলি, জুস হিসেবে।</p>
                            <p className="card-text"><b>জাত পরিচিতি: </b>খাসি ম্যান্ডারিন ও বারি কমলা-১।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>চারা রোপণ: </b>মধ্য বৈশাখ থেকে মধ্য ভাদ্র।</p>
                <p className="card-text"><b>সার ব্যবস্থাপনা:  </b><br />প্রতি গর্তে ১০০ গ্রাম ইউরিয়া সার, ১০০ গ্রাম টিএসপি সার ও এমওপি সার ১০০ গ্রাম প্রয়োগ করতে হয়।</p>
                <p className="card-text"><b>সেচ ও আগাছা ব্যবস্থাপনা: </b><br /> চারা গাছের গোড়ায় মাঝে মাঝে পানি সেচ দিতে হবে। বর্ষাকালে গাছের গোড়ায় যাতে পানি না জমে সেজন্য পানি নিকাশের ব্যবস্থা গ্রহণ করতে হবে। তাছাড়া কমলা গাছের আগাছা দমন করতে হবে।</p>
                <p className="card-text"><b>ফসল তোলা: </b>মধ্য কার্তিক থেকে মধ্য পৌষ মাসে ফল সংগ্রহ করতে হয়।</p>

            </div>
        </div >

    );
};

export default KomolaInfo;