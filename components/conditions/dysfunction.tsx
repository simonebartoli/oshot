import React from 'react';
import {AiOutlineSend} from "react-icons/ai";
import {MdSubdirectoryArrowRight} from "react-icons/md";
import {NextPage} from "next";

type Props = {
    selected: boolean
}

const Dysfunction: NextPage<Props> = ({selected}) => {
    return (
        <article className="flex flex-col sm:gap-6 gap-10 relative">
            <span className="absolute -top-20" id={"sexual-dysfunction"}/> {/*ANCHOR LINK*/}
            <h2 className={`text-2xl transition font-semibold ${selected ? "text-gold" : "text-neutral-500"} sm:text-left text-center`}>Sexual Dysfunction</h2>
            <div className={`flex flex-col gap-16 justify-center items-center smx:border-2 ${selected ? "border-gold" : "border-neutral-500"} sm:p-6 smx:p-10 p-0 smx:py-12 py-2 rounded-lg transition`}>
                <div className="flex flex-col gap-16 justify-center items-center lg:w-4/5">
                    <div className="space-y-8">
                        <h3 className="text-xl">Possible Effects</h3>
                        <div className="space-y-6">
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    Female Sexual Arousal Disorder (usually but not always accompanies Sexual Desire Disorder). Women who suffer with this may want to have sex but have much difficulty finding the pleasure of arousal
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    Hypoactive Sexual Desire Disorder (Low desire)
                                    Approximately 10% of women suffer with this problem.
                                    Important: Suffering with a sexual disorder does not simply make sex not fun. Better sex leads to more energy, more creativity, increased confidence, less depression, and improved overall health.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    Female Orgasmic Disorder: Here women can become aroused but have much difficulty with orgasm. This can be so frustrating that sex becomes a frustration that they may tend avoid.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    Dyspareunia: Here the woman suffers with real pain with sex (not from decreased lubrication or vaginal spasm).
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    Urinary Stress Incontinence
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl">Why Women Suffer Even After Seeing the Gynecologist?</h3>
                        <p className="leading-8">
                            Research shows that only about 14% of women EVER talk to ANY of their physicians about sex. With around 4 in 10 suffering from a sexual disorder, why do <span className={"font-semibold text-gold"}>only about 1 in 10 ever talk to their physician about sex?</span>
                        </p>
                        <p className="leading-8">
                            According to <span className={"font-semibold text-gold"}>Practice Bulletin in Obstetrics and Gynecology</span>, the reason may be that (with the exception of short-term hormone replacement) research shows few proven treatment options. <span className={"font-semibold text-gold"}>Both physician and patient would be discouraged by discussing a problem for which there is no proven solution–so the doctor just doesn’t ask</span>.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl">Why Women Suffer Even After Seeing the Gynecologist?</h3>
                        <p className="leading-8">
                            <span className={"font-semibold text-gold"}>Sexual Dysfunction in Females</span>: Sexual dysfunction is a problem that occurs during a particular phase of the sexual response mechanism. It prevents the individual either from achieving climax or participating in sexual intercourse altogether. Sexual dysfunction in women is a growing and common problem in the current times. Around 40% of women report some sort of a sexual dysfunction. However, it largely remains a topic that is shied away from by most affected women. The causes of sexual dysfunction in females often overlap with each other.
                        </p>
                        <span className="block">Following are some of the most cited ones:</span>
                        <div className="space-y-6">
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    <span className={"font-semibold text-gold"}>Psychological factors</span>: These factors include stress, anxiety, depression or guilt that could be a result of personal or professional difficulties.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    <span className={"font-semibold text-gold"}>Physical factors</span>: Certain medical or physical conditions can cause sexual dysfunction in females. These might include hormonal imbalances, drug abuse, heart disease, arthritis, diabetes, menopause etc.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    <span className={"font-semibold text-gold"}>Antidepressants</span>: The link between sexual dysfunction and antidepressants has grown stronger with time. These are often responsible for sexual dysfunction. Antihistamines and chemotherapy drugs also contribute to the cause.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    <span className={"font-semibold text-gold"}>Hormones</span>: Post menopause, lower estrogen levels lead to reduced sexual responsiveness. Vaginal sensation reduces and vaginal lining becomes less elastic.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <AiOutlineSend className="mt-1 basis-1/12"/>
                                <p className="leading-8 basis-11/12">
                                    <span className={"font-semibold text-gold"}>Birth control pills</span>: Many times birth control pills can also be a cause reduced sexual drive in women. How does it affect women? The most common symptoms and problems in females as a result of sexual dysfunction include:
                                </p>
                            </div>
                            <div className="flex flex-col w-full items-end">
                                <div className="w-[95%] space-y-4">
                                    <div className="flex flex-row items-center gap-4">
                                        <MdSubdirectoryArrowRight className="mt-1 basis-1/12"/>
                                        <p className="leading-8 basis-11/12">
                                            <span className={"font-semibold text-gold"}>Painful sexual intercourse</span>: Pain during sexual intercourse can be caused by a number of problems like vaginismus, vaginal atrophy, ovarian cysts, STDs or lack of sufficient lubrication.
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <MdSubdirectoryArrowRight className="mt-1 basis-1/12"/>
                                        <p className="leading-8 basis-11/12">
                                            <span className={"font-semibold text-gold"}>Reduced sex drive</span>: A lack in sexual desire or interest in sexual intercourse is a major symptom of sexual dysfunction. Factors like medical conditions, hormonal changes, depression, stress, pregnancy or anxiety could lead to reduced libido.
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <MdSubdirectoryArrowRight className="mt-1 basis-1/12"/>
                                        <p className="leading-8 basis-11/12">
                                            <span className={"font-semibold text-gold"}>Anorgasmia</span>: The absence of sexual climax is anorgasmia in women. This could be a result of inexperience, inhibition or depression and anxiety.
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <MdSubdirectoryArrowRight className="mt-1 basis-1/12"/>
                                        <p className="leading-8 basis-11/12">
                                            <span className={"font-semibold text-gold"}>Inability to get aroused</span>: This could be either due to anxiety or inadequate vaginal lubrication. Often, increased foreplay doesn’t seem to be able to tackle the problem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Dysfunction;