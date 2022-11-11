import React from "react";

import { Column, Stack, Text, Row, Line, Input, Img, Button } from "components";

const Frame24234244Page = () => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Column className="font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-end justify-start w-[100%]">
          <Stack className="xl:h-[1015px] 2xl:h-[1141px] 3xl:h-[1369px] lg:h-[811px] w-[92%]">
            <Text
              className="absolute font-normal leading-[normal] left-[0] not-italic text-black_900 top-[28%] w-[47%]"
              as="h5"
              variant="h5"
            >
              Boost your sales 10x faster with content customized by our unique
              partnership of human creativity and AI optimization
            </Text>
            <Stack className="absolute xl:h-[1015px] 2xl:h-[1141px] 3xl:h-[1369px] lg:h-[811px] w-[100%]">
              <Stack className="absolute xl:h-[1015px] 2xl:h-[1141px] 3xl:h-[1369px] lg:h-[811px] w-[100%]">
                <Stack className="absolute xl:h-[1015px] 2xl:h-[1141px] 3xl:h-[1369px] lg:h-[811px] w-[100%]">
                  <Column className="absolute bottom-[0] items-center justify-start left-[0] w-[69%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-semibold lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] text-deep_purple_A400 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Sign Up For The BETA!
                      </Text>
                      <Column className="items-center justify-start 3xl:mr-[110px] lg:mr-[65px] xl:mr-[81px] 2xl:mr-[92px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[90%]">
                        <Row className="items-start justify-evenly w-[100%]">
                          <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] w-[28%]">
                            <Text
                              className="font-light italic lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] text-deep_purple_A400 w-[auto]"
                              variant="body2"
                            >
                              Business Name
                            </Text>
                            <Line className="bg-black_900 h-[1px] mt-[3px] w-[100%]" />
                          </Column>
                          <Text
                            className="font-medium mt-[4px] text-bluegray_900 w-[auto]"
                            variant="body2"
                          >
                            would like a beta invite sent to{" "}
                          </Text>
                          <Column className="items-center justify-start mt-[2px] w-[28%]">
                            <Text
                              className="font-light italic text-deep_purple_A400 w-[auto]"
                              variant="body2"
                            >
                              @email address
                            </Text>
                            <Line className="bg-black_900 h-[1px] mt-[1px] w-[100%]" />
                          </Column>
                          <Text
                            className="font-medium 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-bluegray_900 w-[auto]"
                            variant="body2"
                          >
                            when it’s ready!
                          </Text>
                        </Row>
                      </Column>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-light_blue_A700 text-light_blue_A700 underline w-[100%]"
                        wrapClassName="2xl:ml-[301px] 2xl:mt-[28px] 3xl:ml-[361px] 3xl:mt-[33px] lg:ml-[214px] lg:mt-[19px] w-[37%] xl:ml-[267px] xl:mt-[24px]"
                        name="Group21014"
                        placeholder="Sign up as a freelance partner"
                      ></Input>
                      <Text
                        className="font-bold lg:ml-[364px] xl:ml-[456px] 2xl:ml-[513px] 3xl:ml-[615px] 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] text-deep_purple_A400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        EXPLAINER{" "}
                      </Text>
                      <Img
                        src="images/img_screenshot2021.png"
                        className="lg:h-[298px] xl:h-[372px] 2xl:h-[419px] 3xl:h-[502px] lg:ml-[126px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius6 w-[81%]"
                        alt="Screenshot2021"
                      />
                    </Column>
                  </Column>
                  <Button
                    className="absolute font-medium h-[max-content] inset-y-[0] left-[0] my-[auto] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
                    size="sm"
                    variant="OutlineBlack90026"
                  >
                    Notify me
                  </Button>
                  <Img
                    src="images/img_retinkavatar.png"
                    className="absolute lg:h-[535px] xl:h-[669px] 2xl:h-[752px] 3xl:h-[902px] right-[0] top-[0] w-[44%]"
                    alt="Retinkavatar"
                  />
                </Stack>
                <Column className="absolute justify-start left-[21%] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] top-[19%] w-[53%]">
                  <Text
                    className="2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] text-deep_purple_A400 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    {" "}
                    Logos
                  </Text>
                </Column>
              </Stack>
              <Text
                className="absolute leading-[150.40%] left-[1%] text-bluegray_900 top-[16%] w-[26%]"
                as="h2"
                variant="h2"
              >
                Get Advanced AI
                <br />+ Expert Created
              </Text>
              <Img
                src="images/img_logo.svg"
                className="absolute lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] left-[0] top-[6%] w-[12%]"
                alt="Logo"
              />
            </Stack>
          </Stack>
          <Column className="justify-start lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]">
            <div className="bg-white_A700 lg:h-[275px] xl:h-[344px] 2xl:h-[387px] 3xl:h-[464px] lg:ml-[145px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] rounded-radius20 shadow-bs1 w-[26%]"></div>
            <Img
              src="images/img_megaphone.svg"
              className="lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] 3xl:ml-[1009px] lg:ml-[598px] xl:ml-[748px] 2xl:ml-[841px] lg:mt-[228px] xl:mt-[285px] 2xl:mt-[321px] 3xl:mt-[385px] w-[5%]"
              alt="megaphone"
            />
            <Column className="items-center justify-start lg:ml-[229px] xl:ml-[287px] 2xl:ml-[323px] 3xl:ml-[387px] lg:mt-[229px] xl:mt-[287px] 2xl:mt-[323px] 3xl:mt-[387px] w-[55%]">
              <Text
                className="font-semibold text-deep_purple_A400 w-[auto]"
                as="h3"
                variant="h3"
              >
                Transform your Creation Process
              </Text>
              <Text
                className="font-normal leading-[normal] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic text-center text-gray_800 w-[100%]"
                as="h5"
                variant="h5"
              >
                With a new approach toordering content, you can now stop
                juggling multiple documents and meetings and start publishing
                content faster and on demand
              </Text>
            </Column>
            <Column className="items-center justify-start lg:ml-[246px] xl:ml-[308px] 2xl:ml-[347px] 3xl:ml-[416px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] w-[52%]">
              <Text
                className="font-semibold text-deep_purple_A400 w-[auto]"
                as="h3"
                variant="h3"
              >
                Activate your business growth with RetinkContent.{" "}
              </Text>
              <Text
                className="font-normal leading-[normal] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic text-center text-gray_800 w-[100%]"
                as="h5"
                variant="h5"
              >
                Save time and maintain your brand identity within your budget
                range or sign up for affordable plans and still access multiple
                content services like:
              </Text>
            </Column>
            <Column className="items-center justify-start lg:ml-[214px] xl:ml-[267px] 2xl:ml-[301px] 3xl:ml-[361px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] rounded-radius20 w-[56%]">
              <Column className="items-center justify-start w-[100%]">
                <Stack className="lg:h-[371px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] w-[100%]">
                  <Column className="absolute items-center justify-start right-[0] rounded-radius20 w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="rounded-radius20 w-[32%]">
                          <Img
                            src="images/img_unsplashniukim.png"
                            className="unsplashniUkIm"
                            alt="unsplashniUkIm"
                          />
                          <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[32%]">
                            <Text
                              className="text-gray_801 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Logos
                            </Text>
                            <Line className="bg-gradient  h-[3px] mt-[4px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="rounded-radius20 w-[32%]">
                          <Img
                            src="images/img_unsplashhorhcn.png"
                            className="unsplashniUkIm"
                            alt="unsplashHOrhCn"
                          />
                          <Text
                            className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-gray_801 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Blog Writing
                          </Text>
                          <Line className="bg-gradient  h-[3px] mt-[4px] w-[32%]" />
                        </Column>
                        <Column className="rounded-radius20 w-[32%]">
                          <Img
                            src="images/img_unsplashi6wcdy.png"
                            className="unsplashniUkIm"
                            alt="unsplashI6wCDY"
                          />
                          <Text
                            className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-gray_801 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Animated Videos
                          </Text>
                          <Line className="bg-gradient  h-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[32%]" />
                        </Column>
                      </Row>
                      <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[66%]">
                        <Text
                          className="font-normal leading-[170.00%] not-italic text-black_900 w-[44%]"
                          variant="body2"
                        >
                          {" "}
                          Have a unique & creative logo designed to express and
                          represent your brand identity.
                          <br />
                        </Text>
                        <Text
                          className="font-normal leading-[170.00%] lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic text-black_900 w-[48%]"
                          variant="body2"
                        >
                          {" "}
                          Write SEO enriched blog posts as long or short
                          articles on any topic of your choice .<br />
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                        <Column className="rounded-radius20 w-[32%]">
                          <Img
                            src="images/img_unsplash6teiod.png"
                            className="unsplashniUkIm"
                            alt="unsplash6TeIOd"
                          />
                          <Text
                            className="columnunsplash6teiod"
                            as="h6"
                            variant="h6"
                          >
                            Product Demo
                          </Text>
                          <Line className="bg-gradient  h-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[32%]" />
                        </Column>
                        <Column className="rounded-radius20 w-[32%]">
                          <Img
                            src="images/img_unsplashmrwocg.png"
                            className="unsplashniUkIm"
                            alt="unsplashMrWOCG"
                          />
                          <Text
                            className="lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-gray_801 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Copywriting
                          </Text>
                          <Line className="bg-gradient  h-[3px] mt-[4px] w-[32%]" />
                        </Column>
                        <Column className="rounded-radius20 w-[32%]">
                          <Img
                            src="images/img_unsplashqrkjwe.png"
                            className="unsplashniUkIm"
                            alt="unsplashQRKJwE"
                          />
                          <Text
                            className="columnunsplash6teiod"
                            as="h6"
                            variant="h6"
                          >
                            Social Media Ads
                          </Text>
                          <Line className="bg-gradient  h-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[32%]" />
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Text
                    className="absolute font-normal leading-[170.00%] not-italic right-[0] text-black_900 top-[40%] w-[32%]"
                    variant="body2"
                  >
                    Bring animated characters to life to keep your viewers
                    engaged and entertained.
                    <br />
                  </Text>
                </Stack>
                <Row className="items-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Text
                    className="font-normal leading-[170.00%] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-black_900 w-[25%]"
                    variant="body2"
                  >
                    Introduce your product to potential customers in a clear and
                    creative video.
                    <br />
                  </Text>
                  <Text
                    className="font-normal leading-[170.00%] lg:ml-[52px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] not-italic text-black_900 w-[32%]"
                    variant="body2"
                  >
                    Have creative and compelling copies written to boost your
                    product, brand, service or company.
                    <br />
                  </Text>
                  <Text
                    className="font-normal leading-[170.00%] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-black_900 w-[32%]"
                    variant="body2"
                  >
                    Boost sales and awareness with tailor made ads from experts.
                    <br />
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:ml-[280px] xl:ml-[351px] 2xl:ml-[395px] 3xl:ml-[474px] xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[136px] lg:mt-[81px] rounded-radius20 w-[40%]">
              <Text
                className="font-semibold text-deep_purple_A400 w-[auto]"
                as="h4"
                variant="h4"
              >
                Sign Up For The BETA to see more
              </Text>
              <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] rounded-radius20 w-[100%]">
                <Button className="font-medium lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[49%]">
                  Business Name
                </Button>
                <Button className="font-medium lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[49%]">
                  Email
                </Button>
              </Row>
              <Text className="bg-deep_purple_A400 font-medium lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pt-[14px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] rounded-radius20 lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-shadow-ts text-white_A700 underline w-[223px]">
                <span className="text-white_A700 font-poppins">N</span>
                <span className="text-white_A700 font-poppins">otify me</span>
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-light_blue_A700 text-light_blue_A700 underline w-[100%]"
                wrapClassName="2xl:mt-[36px] 3xl:mt-[43px] lg:mt-[25px] w-[58%] xl:mt-[32px]"
                name="Group21014 One"
                placeholder="Sign up as a freelance partner"
              ></Input>
            </Column>
            <Stack className="lg:h-[330px] xl:h-[412px] 2xl:h-[464px] 3xl:h-[556px] xl:mt-[105px] 2xl:mt-[119px] 3xl:mt-[142px] lg:mt-[84px] w-[100%]">
              <Row className="absolute bg-bluegray_100 items-center lg:p-[38px] xl:p-[48px] 2xl:p-[54px] 3xl:p-[64px] top-[0] w-[100%]">
                <Row className="items-start justify-between lg:mb-[31px] xl:mb-[39px] 2xl:mb-[44px] 3xl:mb-[52px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[93%]">
                  <Column className="items-center justify-start w-[51%]">
                    <Column className="justify-start w-[100%]">
                      <Img
                        src="images/img_logo.svg"
                        className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[29%]"
                        alt="GroupNinetyOne"
                      />
                      <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[96%]">
                        <Text
                          className="font-semibold text-gray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Product by Retink Media UG
                        </Text>
                        <Text
                          className="font-semibold text-gray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Get Early Acess
                        </Text>
                      </Row>
                      <Row className="items-start justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                        <Text
                          className="font-semibold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-gray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Bonn, Germany
                        </Text>
                        <Text
                          className="font-semibold 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] text-gray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Provide Feedback
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[21%]">
                    <Text
                      className="font-normal not-italic text-gray_900 tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Connect with Us
                    </Text>
                    <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Img
                        src="images/img_facebook.svg"
                        className="common-pointer facebook"
                        onClick={handleNavigate1}
                        alt="facebook"
                      />
                      <Img
                        src="images/img_twitter.svg"
                        className="common-pointer facebook"
                        onClick={handleNavigate}
                        alt="twitter"
                      />
                      <Stack
                        className="bg-cover bg-repeat facebook"
                        style={{
                          backgroundImage: "url('images/img_group39.svg')",
                        }}
                      >
                        <Img
                          src="images/img_group20963.png"
                          className="absolute facebook"
                          alt="Group20963"
                        />
                      </Stack>
                      <Img
                        src="images/img_linkedin.svg"
                        className="facebook"
                        alt="linkedin"
                      />
                      <Img
                        src="images/img_youtube.svg"
                        className="facebook"
                        alt="youtube"
                      />
                      <Stack className="bg-white_A700 pr-[1px] rounded-radius50 facebook">
                        <Img
                          src="images/img_settings.svg"
                          className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[96%]"
                          alt="settings"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
              </Row>
              <Row className="absolute bg-black_900 bottom-[0] inset-x-[0] items-center lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
                <Row className="items-start justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[83px] w-[86%]">
                  <Text
                    className="lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Copyright © 2021 Retink
                  </Text>
                  <Text
                    className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Terms of Service
                  </Text>
                </Row>
              </Row>
            </Stack>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Frame24234244Page;
