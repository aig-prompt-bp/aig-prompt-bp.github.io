let currentSlide = 1;
const totalSlides = 12;


const slides = [
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <div class="flex-grow flex flex-col items-center justify-center px-8">
        <h2 class="text-4xl font-bold text-white mb-16 text-center" style="font-size: 2.5rem;">AI 워크샵</h2>
        <div class="text-center mb-16">
            <h1 class="text-6xl font-bold text-white mb-8" style="font-size: 3rem;">실습 프롬프트</h1>
            <p class="text-2xl text-white" style="font-size: 1.5rem;">AI 워크샵을 위한 실습 프롬프트입니다.</p>
        </div>
    </div>
</div>
    `,
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">1. 챗GPT를 이용한 금융시장조사 및 트렌드 분석</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 문서는 NH투자증권에서 발행한 애널리스트 보고서 입니다. 첨부 문서를 기반으로 '특정 섹터'를 도출하고 주요 트렌드를 분석합니다. 이 과정에서 핵심 키워드, 주요 이슈, 섹터 전망, 해당 섹터의 기회와 위협 요소를 요약해서 알려주세요. #한국어로 답변하세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="첨부한 문서는 NH투자증권에서 발행한 애널리스트 보고서 입니다. 첨부 문서를 기반으로 '특정 섹터'를 도출하고 주요 트렌드를 분석합니다. 이 과정에서 핵심 키워드, 주요 이슈, 섹터 전망, 해당 섹터의 기회와 위협 요소를 요약해서 알려주세요. #한국어로 답변하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">분석한 '특정 섹터'의 향후 1년간 예상되는 트렌드를 외부 데이터를 참고하여 예측하세요. 첨부한 문서에서 언급된 주요 이슈들의 실제 반영 가능성 및 그 외의 인사이트 내용을 더해주세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="분석한 '특정 섹터'의 향후 1년간 예상되는 트렌드를 외부 데이터를 참고하여 예측하세요. 첨부한 문서에서 언급된 주요 이슈들의 실제 반영 가능성 및 그 외의 인사이트 내용을 더해주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    실습파일 폴더 > 1. 챗GPT를 이용한 금융시장조사 및 트렌드 분석 > 240829_엔비디아_Comment_vF.pdf<br>
                    실습파일 폴더 > 1. 챗GPT를 이용한 금융시장조사 및 트렌드 분석 > NH투자증권_삼성전자_20240731213651.pdf</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">2. 챗GPT를 이용한 고객 분류 및 페인포인트 분석</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 파일은 각각 자사 고객 데이터와 판매 상품 데이터입니다. 이를 바탕으로 주요 고객 세그먼트를 나누고, 각 세그먼트의 특징을 분석하고 반환합니다. 구분한 세그먼트에 관해 각 인구통계 특성과 구매 성향을 중심으로 구체적인 설명을 포함하세요. #한국어로 답변하세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="첨부한 파일은 각각 자사 고객 데이터와 판매 상품 데이터입니다. 이를 바탕으로 주요 고객 세그먼트를 나누고, 각 세그먼트의 특징을 분석하고 반환합니다. 구분한 세그먼트에 관해 각 인구통계 특성과 구매 성향을 중심으로 구체적인 설명을 포함하세요. #한국어로 답변하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">세그먼트별로 고객의 투자 성향과 금융상품 위험 구분을 바탕으로 고객이 겪을 수 있는 주요 페인포인트를 분석하고 보고서를 작성하고 설명하세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="세그먼트별로 고객의 투자 성향과 금융상품 위험 구분을 바탕으로 고객이 겪을 수 있는 주요 페인포인트를 분석하고 보고서를 작성하고 설명하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">이어서 각 고객 세그먼트를 바탕으로 적합한 상품을 도출하고, 각 그룹에 맞는 상품 제안 포인트와 설득 전략을 제안해주세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="이어서 각 고객 세그먼트를 바탕으로 적합한 상품을 도출하고, 각 그룹에 맞는 상품 제안 포인트와 설득 전략을 제안해주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    실습파일 폴더 > 5. 챗GPT를 이용한 고객분류 및 페인포인트 분석 > 판매상품_수정1003.xlsx<br>
                    실습파일 폴더 > 8. 고객성향별 상품 매칭 > Updated_고객투자성향및보유상품.xlsx</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">3. 이디오그램과 Canva로 이미지 생성</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">증권회사의 투자상품 고객 설명회 안내장 이미지를 생성하기 위한 프롬프트를 작성해 주세요. 이미지에는 행사 제목, 날짜, 시간, 장소 등의 정보가 포함되어야 하며, 전문적이면서도 친근한 분위기를 전달할 수 있도록 디자인 요소를 제안해 주세요</p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">다음의 지침을 따르세요.</p>
                            <ol class="list-decimal list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                <li>프롬프트는 한글로 생성하되, 행사에 대한 정보는 영어로 생성하세요</li>
                                <li>배경과 행사정보가 있는 프롬프트, 배경만 있는 프롬프트 2가지 버전으로 프롬프트를 제작하세요.</li>
                                <li>이미지를 생성하지마세요.</li>
                            </ol>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="증권회사의 투자상품 고객 설명회 안내장 이미지를 생성하기 위한 프롬프트를 작성해 주세요. 이미지에는 행사 제목, 날짜, 시간, 장소 등의 정보가 포함되어야 하며, 전문적이면서도 친근한 분위기를 전달할 수 있도록 디자인 요소를 제안해 주세요

다음의 지침을 따르세요.
1. 프롬프트는 한글로 생성하되, 행사에 대한 정보는 영어로 생성하세요
2. 배경과 행사정보가 있는 프롬프트, 배경만 있는 프롬프트 2가지 버전으로 프롬프트를 제작하세요.
3. 이미지를 생성하지마세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">(Ideogram에 접속하여 [Step1]에서 생성된 프롬프트를 사용하세요.)</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">4. 챗GPT로 인터넷 정보에 기반한 회사 정보 요약 및 시나리오 작성</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">웹 브라우징 기능을 사용하여 '[원하는 기업명]' 기업의 최신 정보를 수집하고, 해당 정보를 기반으로 기업이 가지고 있는 페인포인트, NH투자증권이 제안할 수 있는 가치, 솔루션을 도출하세요. #한국어로 답변하세요.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="웹 브라우징 기능을 사용하여 '[원하는 기업명]' 기업의 최신 정보를 수집하고, 해당 정보를 기반으로 기업이 가지고 있는 페인포인트, NH투자증권이 제안할 수 있는 가치, 솔루션을 도출하세요. #한국어로 답변하세요.">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">분석한 내용을 바탕으로, 해당 기업의 방문 목적을 설명하는 시나리오를 작성해주세요. 시나리오에는 기업의 현재 재무 상태, 투자 필요성, 그리고 NH투자증권이 제공할 수 있는 금융 솔루션과 가치 제안이 포함되어야 합니다.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="분석한 내용을 바탕으로, 해당 기업의 방문 목적을 설명하는 시나리오를 작성해주세요. 시나리오에는 기업의 현재 재무 상태, 투자 필요성, 그리고 NH투자증권이 제공할 수 있는 금융 솔루션과 가치 제안이 포함되어야 합니다.">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">해당 기업 방문시 상대기업의 예상질문 5개를 생성해주세요. 각 5개의 예상질문에 대해 답변하기 위해 해외사례(맥킨지 보고서)를 웹브라우징으로 검색한 다음 질문에 대한 답변을 생성해주세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="해당 기업 방문시 상대기업의 예상질문 5개를 생성해주세요. 각 5개의 예상질문에 대해 답변하기 위해 해외사례(맥킨지 보고서)를 웹브라우징으로 검색한 다음 질문에 대한 답변을 생성해주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">5. 퍼플렉시티를 이용한 검색</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">24년 9월 기준, [반도체 산업]의 최근 시장의 주요 시황, 테마, 주도주, 증권상품을 검색한 다음 관련해서 주목해야할 최신 규제나 정책 변화도 함께 검색하세요. 아래 내용을 바탕으로 정보들을 분석해주세요. 특히, 특정 상품에 최신 규제와 정책 변화가 어떤 영향을 미치는지 상세히 분석해 주세요.</p>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">[Step1에서 생성된 내용을 이곳에 붙여넣기해주세요.]</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="24년 9월 기준, [반도체 산업]의 최근 시장의 주요 시황, 테마, 주도주, 증권상품을 검색한 다음 관련해서 주목해야할 최신 규제나 정책 변화도 함께 검색하세요. 아래 내용을 바탕으로 정보들을 분석해주세요. 특히, 특정 상품에 최신 규제와 정책 변화가 어떤 영향을 미치는지 상세히 분석해 주세요.
    
    [Step1에서 생성된 내용을 이곳에 붙여넣기해주세요.]">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 text-base">
                        <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">Perplexity</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,
        `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">6. 특정 주식 미래 가격 예측</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 파일은 NH투자증권에서 발행한 애널리스트 보고서입니다. 보고서를 읽고 최근 5년간 매출, 순이익 정보를 표로 정리해주세요. #한국어로 답변하세요.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="첨부한 파일은 NH투자증권에서 발행한 애널리스트 보고서입니다. 보고서를 읽고 최근 5년간 매출, 순이익 정보를 표로 정리해주세요. #한국어로 답변하세요.">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">PER을 20, 25, 30을 적용해서 연도별 시가총액을 예측하고 과거 5년, 향후 3년에 대한 주가차트를 그려주세요.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="PER을 20, 25, 30을 적용해서 연도별 시가총액을 예측하고 과거 5년, 향후 3년에 대한 주가차트를 그려주세요.">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">매출 평균 성장율과 평균 순이익율을 계산하고 향후 3년간의 매출과 순이익을 예측해서 표 형식으로 작성해주세요.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="매출 평균 성장율과 평균 순이익율을 계산하고 향후 3년간의 매출과 순이익을 예측해서 표 형식으로 작성해주세요.">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">4</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">사용할 수 있는 예측기법을 5가지 생각한 후, 상황에 맞는 예측기법을 선택하세요. 현재 주가를 검색하고, 미래 가격을 예측해서 표로 정리해주세요.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="사용할 수 있는 예측기법을 5가지 생각한 후, 상황에 맞는 예측기법을 선택하세요. 현재 주가를 검색하고, 미래 가격을 예측해서 표로 정리해주세요.">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 text-base">
                        <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                        실습파일 폴더 > 1. 챗GPT를 이용한 금융시장조사 및 트렌드 분석 > NH투자증권_삼성전자_20240731213651.pdf</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,
        `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">7. 투자분야 유튜버 영상 요약 및 분석 자동화</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">아래는 고객이 신뢰하는 투자조언 유튜버의콘텐츠입니다. 제공된 영상을 요약하고, 유튜버의 투자 의견을 '추천', '관망', '비추천' 중 하나로 분류해 주세요. 또한 그 근거(타임스탬프 포함)를 상세히 정리해 주세요.</p>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">---</p>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">제목: [여기에 제목 입력]</p>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">내용: [여기에 영상 내용 입력]</p>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">(예시영상)</p>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">https://www.youtube.com/watch?v=RxF8qkECv78</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="아래는 고객이 신뢰하는 투자조언 유튜버의콘텐츠입니다. 제공된 영상을 요약하고, 유튜버의 투자 의견을 '추천', '관망', '비추천' 중 하나로 분류해 주세요. 또한 그 근거(타임스탬프 포함)를 상세히 정리해 주세요.
    
    ---
    제목: [여기에 제목 입력]
    내용: [여기에 영상 내용 입력]
    (예시영상)
    https://www.youtube.com/watch?v=RxF8qkECv78">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 text-base">
                        <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">코스닥 주식시황, 나스닥 주식시황, 미국 주식시황 등의 키워드로 유튜브에서 영상을 탐색해보세요. '스크립트 표시' 버튼을 누르면, 유튜브 영상을 텍스트로 추출할 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,
        `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">8. 고배당 미국 ETF 추천 영업 시나리오 제작하기</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 파일은 고배당 ETF의 최신 상품 정보, 고객투자성향 데이터입니다. 이 정보를 토대로 고배당 미국 ETF 시장 트렌드를 분석하고 고객의 투자 성향(공격형, 중립형, 보수형)에 맞는 맞춤형 제안 시나리오를 작성해 주세요. #한국어로 답변하세요.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="첨부한 파일은 고배당 ETF의 최신 상품 정보, 고객투자성향 데이터입니다. 이 정보를 토대로 고배당 미국 ETF 시장 트렌드를 분석하고 고객의 투자 성향(공격형, 중립형, 보수형)에 맞는 맞춤형 제안 시나리오를 작성해 주세요. #한국어로 답변하세요.">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">각 시나리오에서 있을 수 있는 예상 질문을 5개씩 만들어주세요.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="각 시나리오에서 있을 수 있는 예상 질문을 5개씩 만들어주세요.">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">각 투자 성향별 고객의 규모와 자산규모를 표로 정리해주세요. 자산규모는 천의 자리마다 쉼표로 나눠주세요. 다음과 같이 표를 구성하세요.</p>
                            <pre class="bg-gray-100 p-2 rounded-md"><code>투자성향|고객수|자산규모|평균자산규모</code></pre>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="각 투자 성향별 고객의 규모와 자산규모를 표로 정리해주세요. 자산규모는 천의 자리마다 쉼표로 나눠주세요. 다음과 같이 표를 구성하세요.
투자성향|고객수|자산규모|평균자산규모
                               <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    실습파일 폴더 > 6. 고배당 미국 ETF 추천 > 240911_한미일 고배당 ETF.xlsx<br>
                    실습파일 폴더 > 8. 고객성향별 상품 매칭 > Updated_고객투자성향및보유상품.xlsx</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">9. GPTs의 이해 및 실무 챗봇 제작</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="flex-grow">
                                <h3 class="text-2xl font-bold mb-4">Role</h3>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">당신은 ㅇㅇㅇ입니다.</p>
                                
                                <h3 class="text-2xl font-bold mb-4 mt-6">Objective</h3>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">사용자가 상황을 설명하면, 세법개정안 관련 문서를 먼저 분석하고 사용자에게 도움될만한 개정안 내용을 제공하세요.</p>
                                
                                <h3 class="text-2xl font-bold mb-4 mt-6">Knowledge</h3>
                                <ul class="list-disc list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                    <li>★0._2024년_세법개정안_보도자료[1].pdf</li>
                                    <li>★1._2024년_세법개정안_개조식[1].pdf</li>
                                    <li>★2._2024년_세법개정안_상세본[1].pdf</li>
                                    <li>★3._24년_세법개정안_문답자료[1].pdf</li>
                                </ul>
                                
                                <h3 class="text-2xl font-bold mb-4 mt-6">1. 회사 개요</h3>
                                <ul class="list-disc list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                    <li>사업 포트폴리오에 대한 상세한 설명</li>
                                    <li>최근 1년 내 회사 동향 (주요 사건, 신제품 출시 등)</li>
                                </ul>
                                
                                <h3 class="text-2xl font-bold mb-4 mt-6">2. 산업 분석</h3>
                                <ul class="list-disc list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                    <li>시장 환경</li>
                                    <li>주요 경쟁사 및 시장 위치</li>
                                    <li>산업 동향 및 전망</li>
                                </ul>
                                
                                <h3 class="text-2xl font-bold mb-4 mt-6">3. 재무 분석</h3>
                                <ul class="list-disc list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                    <li>재무 상태</li>
                                    <li>실적</li>
                                </ul>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="# Role
    당신은 ㅇㅇㅇ입니다.
    
    # Objective
    사용자가 상황을 설명하면, 세법개정안 관련 문서를 먼저 분석하고 사용자에게 도움될만한 개정안 내용을 제공하세요.
    
    # knowledge
    ★0._2024년_세법개정안_보도자료[1].pdf
    ★1._2024년_세법개정안_개조식[1].pdf
    ★2._2024년_세법개정안_상세본[1].pdf
    ★3._24년_세법개정안_문답자료[1].pdf
    
    1. 회사 개요
    - 사업 포트폴리오에 대한 상세한 설명
    - 최근 1년 내 회사 동향 (주요 사건, 신제품 출시 등)
    
    2. 산업 분석
    - 시장 환경
    - 주요 경쟁사 및 시장 위치
    - 산업 동향 및 전망
    
    3. 재무 분석
    - 재무 상태
    - 실적">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    ];


// 슬라이드 제목 추출 함수
function extractSlideTitle(slideContent) {
    const titleMatch = slideContent.match(/<h2[^>]*>(.*?)<\/h2>/);
    return titleMatch ? titleMatch[1] : `슬라이드 ${i}`;
}

// 복사 버튼 이벤트 리스너 설정 함수
function setupCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.getAttribute('data-copy-text');
            copyToClipboard(textToCopy, button);
        });
    });
}

// 슬라이드 로드 함수 수정
function loadSlide(slideNumber) {
    console.log(`Loading slide ${slideNumber}`);
    const slideContent = slides[slideNumber - 1]; // 배열은 0부터 시작하므로 1을 빼줍니다
    if (slideContent) {
        // 여기서 제목과 본문의 여백을 늘리고 제목을 가운데 정렬합니다
        const modifiedContent = slideContent.replace(
            /<h2 class="(.*?)"/,
            '<h2 class="$1 text-center mb-8 mt-4"'
        );
        document.getElementById('slide').innerHTML = modifiedContent;
        console.log(`Slide ${slideNumber} content loaded`);
        setupCopyButtons(); // 슬라이드 로드 후 복사 버튼 설정
        updateSlideList(); // 슬라이드 로드 후 목차 업데이트
    } else {
        console.log(`Slide ${slideNumber} not found`);
        document.getElementById('slide').innerHTML = `
            <div class="flex items-center justify-center h-screen">
                <p style="font-size: 1.5rem;">Error: Slide ${slideNumber} not found</p>
            </div>
        `;
    }
}

// 복사 기능 추가
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        // 팝업 생성
        const popup = document.createElement('div');
        popup.innerHTML = `
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <span style="font-size: 1.5rem;">복사됨!</span>
        `;
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        `;
        document.body.appendChild(popup);

        // 애니메이션 위한 스타일 추가
        const style = document.createElement('style');
        style.textContent = `
            .checkmark {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: block;
                stroke-width: 2;
                stroke: #fff;
                stroke-miterlimit: 10;
                box-shadow: inset 0px 0px 0px #7ac142;
                animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
            }
            .checkmark__circle {
                stroke-dasharray: 166;
                stroke-dashoffset: 166;
                stroke-width: 2;
                stroke-miterlimit: 10;
                stroke: #7ac142;
                fill: none;
                animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
            }
            .checkmark__check {
                transform-origin: 50% 50%;
                stroke-dasharray: 48;
                stroke-dashoffset: 48;
                animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
            }
            @keyframes stroke {
                100% {
                    stroke-dashoffset: 0;
                }
            }
            @keyframes fill {
                100% {
                    box-shadow: inset 0px 0px 0px 30px #7ac142;
                }
            }
            @keyframes scale {
                0%, 100% {
                    transform: none;
                }
                50% {
                    transform: scale3d(1.1, 1.1, 1);
                }
            }
        `;
        document.head.appendChild(style);

        // 2초 후 팝업 제거
        setTimeout(() => {
            document.body.removeChild(popup);
            document.head.removeChild(style);
        }, 2000);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
    });
}

// 초기 슬라이드 로드 및 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, loading initial slide');
    loadSlide(currentSlide);
    updateSlideList(); // 목차 업데이트
    setupCopyButtons(); // 초기 로드 시 복사 버튼 설정
});

// document.getElementById('prevSlide').addEventListener('click', () => {
//     console.log('Previous slide button clicked');
//     if (currentSlide > 1) {
//         currentSlide--;
//         loadSlide(currentSlide);
//     }
// });

// document.getElementById('nextSlide').addEventListener('click', () => {
//     console.log('Next slide button clicked');
//     if (currentSlide < totalSlides) {
//         currentSlide++;
//         loadSlide(currentSlide);
//     }
// });

// 슬라이드 목록 생성 함수 수정
function updateSlideList() {
    const slideList = document.getElementById('slideList');
    slideList.innerHTML = ''; // 기존 목록 초기화

    // Gamma와 Suno AI 링크 추가
    const externalLinks = document.createElement('div');
    externalLinks.classList.add('external-links');
    externalLinks.style.padding = '10px';
    externalLinks.style.borderBottom = '1px solid #ccc';
    externalLinks.innerHTML = `
        <a href="https://gamma.app" target="_blank" style="font-size: 1.25rem; margin-right: 15px; color: #3b82f6; text-decoration: none;">Gamma</a>
        <a href="https://suno.ai" target="_blank" style="font-size: 1.25rem; margin-right: 15px; color: #3b82f6; text-decoration: none;">Suno AI</a>
        <a href="https://ideogram.ai" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Ideogram</a>
    `;
    slideList.appendChild(externalLinks);

    for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('slide-item');
        li.style.fontSize = '1.25rem'; // 목차 항목 폰트 크기 증가
        
        // 현재 슬라이드 강조
        if (i + 1 === currentSlide) {
            li.classList.add('current-slide');
            li.style.backgroundColor = '#e0e7ff'; // 연한 파란색 배경
            li.style.fontWeight = 'bold';
        }
        
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('slide-number');
        numberSpan.textContent = i + 1;
        numberSpan.style.fontSize = '1.5rem'; // 슬라이드 번호 폰트 크기 증가
        
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('slide-title');
        titleSpan.textContent = extractSlideTitle(slides[i]);
        titleSpan.style.fontSize = '1.25rem'; // 슬라이드 제목 폰트 크기 증가
        
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('slide-preview');
        const previewContent = document.createElement('div');
        previewContent.classList.add('slide-preview-content');
        previewContent.innerHTML = slides[i];
        previewContent.style.fontSize = '1rem'; // 미리보기 내용 폰트 크기 증가
        previewDiv.appendChild(previewContent);
        
        li.appendChild(numberSpan);
        li.appendChild(titleSpan);
        li.appendChild(previewDiv);
        
        li.addEventListener('click', () => {
            currentSlide = i + 1;
            loadSlide(currentSlide);
            updateSlideList(); // 목차 업데이트
        });
        slideList.appendChild(li);
    }
}

// 사이드바 기능 등 기존 코드는 그대로 유지...

// 사이드바 토글 기능
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    if (sidebar.classList.contains('closed')) {
        document.getElementById('toggleTOC').style.display = 'none';
    } else {
        document.getElementById('toggleTOC').style.display = 'flex';
    }
    document.getElementById('toggleSidebar').style.fontSize = '1.5rem'; // 토글 버튼 폰트 크기 증가
});

// 목차 토글 기능
document.getElementById('toggleTOC').addEventListener('click', () => {
    const slideList = document.getElementById('slideList');
    slideList.classList.toggle('hidden');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.textContent = slideList.classList.contains('hidden') ? '▼' : '▲';
    toggleIcon.style.fontSize = '1.5rem'; // 토글 아이콘 크기 증가
});

// ... (기존 코드 유지)

function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        // 팝업 생성
        const popup = document.createElement('div');
        popup.innerHTML = `
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <span style="font-size: 1.5rem;">복사됨!</span>
        `;
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        `;
        document.body.appendChild(popup);

        // 애니메이션 위한 스타일 추가
        const style = document.createElement('style');
        style.textContent = `
            .checkmark {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: block;
                stroke-width: 2;
                stroke: #fff;
                stroke-miterlimit: 10;
                box-shadow: inset 0px 0px 0px #7ac142;
                animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
            }
            .checkmark__circle {
                stroke-dasharray: 166;
                stroke-dashoffset: 166;
                stroke-width: 2;
                stroke-miterlimit: 10;
                stroke: #7ac142;
                fill: none;
                animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
            }
            .checkmark__check {
                transform-origin: 50% 50%;
                stroke-dasharray: 48;
                stroke-dashoffset: 48;
                animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
            }
            @keyframes stroke {
                100% {
                    stroke-dashoffset: 0;
                }
            }
            @keyframes fill {
                100% {
                    box-shadow: inset 0px 0px 0px 30px #7ac142;
                }
            }
            @keyframes scale {
                0%, 100% {
                    transform: none;
                }
                50% {
                    transform: scale3d(1.1, 1.1, 1);
                }
            }
        `;
        document.head.appendChild(style);

        // 2초 후 팝업 제거
        setTimeout(() => {
            document.body.removeChild(popup);
            document.head.removeChild(style);
        }, 2000);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
    });
}

// 초기 슬라이드 로드 및 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, loading initial slide');
    loadSlide(currentSlide);
    updateSlideList(); // 목차 업데이트
    setupCopyButtons(); // 초기 로드 시 복사 버튼 설정
});

document.getElementById('prevSlide').addEventListener('click', () => {
    console.log('Previous slide button clicked');
    if (currentSlide > 1) {
        currentSlide--;
        loadSlide(currentSlide);
    }
});

document.getElementById('nextSlide').addEventListener('click', () => {
    console.log('Next slide button clicked');
    if (currentSlide < totalSlides) {
        currentSlide++;
        loadSlide(currentSlide);
    }
});

// 슬라이드 목록 생성 함수 수정
function updateSlideList() {
    const slideList = document.getElementById('slideList');
    slideList.innerHTML = ''; // 기존 목록 초기화

    // Gamma와 Suno AI 링크 추가
    const externalLinks = document.createElement('div');
    externalLinks.classList.add('external-links');
    externalLinks.style.padding = '10px';
    externalLinks.style.borderBottom = '1px solid #ccc';
    externalLinks.innerHTML = `
        <a href="https://gamma.app" target="_blank" style="font-size: 1.25rem; margin-right: 15px; color: #3b82f6; text-decoration: none;">Gamma</a>
        <a href="https://suno.ai" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Suno AI</a>
    `;
    slideList.appendChild(externalLinks);

    for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('slide-item');
        li.style.fontSize = '1.25rem'; // 목차 항목 폰트 크기 증가
        
        // 현재 슬라이드 강조
        if (i + 1 === currentSlide) {
            li.classList.add('current-slide');
            li.style.backgroundColor = '#e0e7ff'; // 연한 파란색 배경
            li.style.fontWeight = 'bold';
        }
        
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('slide-number');
        numberSpan.textContent = i + 1;
        numberSpan.style.fontSize = '1.5rem'; // 슬라이드 번호 폰트 크기 증가
        
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('slide-title');
        titleSpan.textContent = extractSlideTitle(slides[i]);
        titleSpan.style.fontSize = '1.25rem'; // 슬라이드 제목 폰트 크기 증가
        
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('slide-preview');
        const previewContent = document.createElement('div');
        previewContent.classList.add('slide-preview-content');
        previewContent.innerHTML = slides[i];
        previewContent.style.fontSize = '1rem'; // 미리보기 내용 폰트 크기 증가
        previewDiv.appendChild(previewContent);
        
        li.appendChild(numberSpan);
        li.appendChild(titleSpan);
        li.appendChild(previewDiv);
        
        li.addEventListener('click', () => {
            currentSlide = i + 1;
            loadSlide(currentSlide);
            updateSlideList(); // 목차 업데이트
        });
        slideList.appendChild(li);
    }
}

// 사이드바 기능 등 기존 코드는 그대로 유지...

// 사이드바 토글 기능
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    if (sidebar.classList.contains('closed')) {
        document.getElementById('toggleTOC').style.display = 'none';
    } else {
        document.getElementById('toggleTOC').style.display = 'flex';
    }
    document.getElementById('toggleSidebar').style.fontSize = '1.5rem'; // 토글 버튼 폰트 크기 증가
});

// 목차 토글 기능
document.getElementById('toggleTOC').addEventListener('click', () => {
    const slideList = document.getElementById('slideList');
    slideList.classList.toggle('hidden');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.textContent = slideList.classList.contains('hidden') ? '▼' : '▲';
    toggleIcon.style.fontSize = '1.5rem'; // 토글 아이콘 크기 증가
});

// ... (기존 코드 유지)
