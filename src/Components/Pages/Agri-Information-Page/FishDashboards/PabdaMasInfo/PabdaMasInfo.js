import React from 'react';
import { Divider, Typography } from '@mui/material';
import pabdaMas from '../../../../../images/Agri-info/fish/Pabda_পাবদা মাছ.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const PabdaMasInfo = () => {

    // dynamic title
    useDocumentTitle("পাবদা মাছ");

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
                পাবদা মাছ
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pabdaMas} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>পুকুর নির্বাচন</b><br />
                                • এ মাছ চাষের জন্য ৭-৮ মাস পানি থাকে এ রকম ১৫-২০ শতাংশের পুকুর/জলাশয় নির্বাচন করা যায়।<br />
                                • পুকুরটি বন্যামুক্ত এবং পর্যাপ্ত আলো বাতাসের ব্যবস্থা থাকতে হবে।</p>
                            <p className="card-text"><b>পুকুর প্রস্তুতি, পোনা মজুদ,খাদ্য ও সার প্রয়োগ</b><br />
                                •  পুকুরের পাড় মেরামত জলজ আগাছা পরিষ্কার করার পর শতাংশে ১কেজি হারে চুন প্রয়োগ করতে হবে।<br />
                                •  চুন প্রয়োগের ৩ দিন পর প্রতি শতাংশে ৭-৮ কেজি গোবর প্রয়োগ করতে হবে।<br />
                                •  শতাংশ প্রতি ৩-৪ গ্রাম ওজনের সুস্থ্য-সবল ২০০-২৫০ টি পোনা মজুদ করা যাবে।
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p>•  সম্পুরক খাদ্য হিসেবে দেহ ওজনের ৫-১০ ভাগ হারে ২৫-৩০% আমিষ সমৃদ্ধ খাবার প্রতিদিন ২ বার প্রয়োগ করতে হবে।<br />
                    •  প্রাকৃতিক খাবার উৎপাদনের জন্য ১৫ দিন অন্তর ৪ কেজি গোবর সার প্রয়োগ করা যেতে পারে।</p>
                <p className="card-text"><b>মাছ আহরণ ও উৎপাদন </b><br />
                    • ৭-৮ মাসের মধ্যে ৩০-৩৫ গ্রাম ওজনের হলে মাছ আহরণ করা যাবে।<br />
                    • আধা-নিবিড় পদ্ধতিতে একক চাষের মতাংশে ১৪-১৫ কেজি মাছ উৎপাদন করা যেতে পারে</p>

            </div>
        </div >


    );
};

export default PabdaMasInfo;