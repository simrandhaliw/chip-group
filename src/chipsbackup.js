import "@patternfly/react-core/dist/styles/base.css";
import "./fonts.css";
import "./styles.css";
import React from "react";

import {
    Card,
    CardTitle,
    CardBody,
    Chip,
    ChipGroup,
    TextContent,
    Text,
    TextVariants
} from "@patternfly/react-core";

class CategoryChipGroupRemovable extends React.Component {
    constructor(props) {
        super(props);
        const TopicRead = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-blue">
                        <span class="pf-c-label__content">
                            T
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Read</Text>
                </div>
            </div>
        ];
        const KafkaInstanceAll = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-grey">
                        <span class="pf-c-label__content">
                            KI
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Kafka instance</Text>
                </div>
            </div>
        ];
        const TopicWrite = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-blue">
                        <span class="pf-c-label__content">
                            T
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Write</Text>
                </div>
            </div>
        ];
        const ConsumerGroupRead = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-green">
                        <span class="pf-c-label__content">
                            G
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Read</Text>
                </div>
            </div>
        ];
        const ConsumerGroupDescribe = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-green">
                        <span class="pf-c-label__content">
                            G
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Describe</Text>
                </div>
            </div>
        ];
        const TopicCreate = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-blue">
                        <span class="pf-c-label__content">
                            T
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Create</Text>
                </div>
            </div>
        ];
        const TopicDelete = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-blue">
                        <span class="pf-c-label__content">
                            T
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Delete</Text>
                </div>
            </div>
        ];

        // Just reduced size label icons

        // const TopicSmallerLabelIcon = [
        //     <div class="row">
        //         <div class="child">
        //             <span class="pf-c-label mas-m-solid pf-m-blue smaller-label">
        //                 <span class="pf-c-label__content">
        //                     T
        //                 </span>
        //             </span>
        //         </div>
        //         <div class="child">
        //         </div>
        //     </div>
        // ];

        // const KafkaInstanceSmallerLabelIcon = [
        //     <div class="row">
        //         <div class="child">
        //             <span class="pf-c-label mas-m-solid pf-m-grey smaller-label">
        //                 <span class="pf-c-label__content">
        //                     KI
        //                 </span>
        //             </span>
        //         </div>
        //         <div class="child">
        //         </div>
        //     </div>
        // ];

        // const ConsumerGroupSmallerLabelIcon = [
        //     <div class="row">
        //         <div class="child">
        //             <span class="pf-c-label mas-m-solid pf-m-green smaller-label">
        //                 <span class="pf-c-label__content">
        //                     G
        //                 </span>
        //             </span>
        //         </div>
        //         <div class="child">
        //         </div>
        //     </div>
        // ];

        // Reduced size label size chip group

        const TopicReadSmallerLabel = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-blue smaller-label">
                        <span class="pf-c-label__content">
                            T
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Read</Text>
                </div>
            </div>
        ];
        const KafkaInstanceAllSmallerLabel = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-grey smaller-label">
                        <span class="pf-c-label__content">
                            KI
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Kafka instance</Text>
                </div>
            </div>
        ];
        const TopicWriteSmallerLabel = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-blue smaller-label">
                        <span class="pf-c-label__content">
                            T
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Write</Text>
                </div>
            </div>
        ];
        const ConsumerGroupReadSmallerLabel = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-green smaller-label">
                        <span class="pf-c-label__content">
                            G
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Read</Text>
                </div>
            </div>
        ];
        const ConsumerGroupDescribeSmallerLabel = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-green smaller-label">
                        <span class="pf-c-label__content">
                            G
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Describe</Text>
                </div>
            </div>
        ];
        const TopicCreateSmallerLabel = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-blue smaller-label">
                        <span class="pf-c-label__content">
                            T
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Create</Text>
                </div>
            </div>
        ];
        const TopicDeleteSmallerLabel = [
            <div class="row">
                <div class="child">
                    <span class="pf-c-label mas-m-solid pf-m-blue smaller-label">
                        <span class="pf-c-label__content">
                            T
                        </span>
                    </span>
                </div>
                <div class="child">
                    <Text>&nbsp;Delete</Text>
                </div>
            </div>
        ];

        // Text only
        const ReadText = [
            <div class="row">
                <div class="child">
                    <Text>&nbsp;Read</Text>
                </div>
            </div>
        ];
        const KafkaInstanceText = [
            <div class="row">
                <div class="child">
                    <Text>&nbsp;Kafka instance</Text>
                </div>
            </div>
        ];
        const WriteText = [
            <div class="row">
                <div class="child">
                    <Text>&nbsp;Write</Text>
                </div>
            </div>
        ];
        const DescribeText = [
            <div class="row">
                <div class="child">
                    <Text>&nbsp;Describe</Text>
                </div>
            </div>
        ];
        const CreateText = [
            <div class="row">
                <div class="child">
                    <Text>&nbsp;Create</Text>
                </div>
            </div>
        ];
        const DeleteText = [
            <div class="row">
                <div class="child">
                    <Text>&nbsp;Delete</Text>
                </div>
            </div>
        ];

        this.state = {
            chipsSet1: [
                TopicRead,
                KafkaInstanceAll,
                TopicWrite,
                ConsumerGroupRead,
                ConsumerGroupDescribe,
                TopicCreate,
                TopicDelete
            ],
            chipsSet2: [
                TopicReadSmallerLabel,
                KafkaInstanceAllSmallerLabel,
                TopicWriteSmallerLabel,
                ConsumerGroupReadSmallerLabel,
                ConsumerGroupDescribeSmallerLabel,
                TopicCreateSmallerLabel,
                TopicDeleteSmallerLabel
            ],
            chipsSet3: [
                TopicReadSmallerLabel,
                TopicWriteSmallerLabel,
                KafkaInstanceAllSmallerLabel,
                ConsumerGroupReadSmallerLabel,
                ConsumerGroupDescribeSmallerLabel,
                TopicCreateSmallerLabel,
                TopicDeleteSmallerLabel
            ],
            chipsSet4: [
                ReadText,
                WriteText,
                CreateText,
                DeleteText
            ],
            chipsSet5: [
                KafkaInstanceText
            ],
            chipsSet6: [
                ReadText,
                DescribeText
            ],
        };

        this.deleteItem1 = (id) => {
            const copyOfChips = this.state.chipsSet1;
            const index = copyOfChips.indexOf(id);
            if (index !== -1) {
                copyOfChips.splice(index, 1);
                this.setState({ chipsSet1: copyOfChips });
            }
        };

        this.deleteItem2 = (id) => {
            const copyOfChips = this.state.chipsSet2;
            const index = copyOfChips.indexOf(id);
            if (index !== -1) {
                copyOfChips.splice(index, 1);
                this.setState({ chipsSet2: copyOfChips });
            }
        };

        this.deleteItem3 = (id) => {
            const copyOfChips = this.state.chipsSet3;
            const index = copyOfChips.indexOf(id);
            if (index !== -1) {
                copyOfChips.splice(index, 1);
                this.setState({ chipsSet3: copyOfChips });
            }
        };

        this.deleteItem4 = (id) => {
            const copyOfChips = this.state.chipsSet4;
            const index = copyOfChips.indexOf(id);
            if (index !== -1) {
                copyOfChips.splice(index, 1);
                this.setState({ chipsSet4: copyOfChips });
            }
        };

        this.deleteItem5 = (id) => {
            const copyOfChips = this.state.chipsSet5;
            const index = copyOfChips.indexOf(id);
            if (index !== -1) {
                copyOfChips.splice(index, 1);
                this.setState({ chipsSet5: copyOfChips });
            }
        };

        this.deleteItem6 = (id) => {
            const copyOfChips = this.state.chipsSet6;
            const index = copyOfChips.indexOf(id);
            if (index !== -1) {
                copyOfChips.splice(index, 1);
                this.setState({ chipsSet6: copyOfChips });
            }
        };

        this.deleteItem = (id) => {
            this.setState({ [id]: null });
        };

        this.deleteCategory1 = () => {
            this.setState({ chipsSet1: [] });
        };

        this.deleteCategory2 = () => {
            this.setState({ chipsSet2: [] });
        };

        this.deleteCategory3 = () => {
            this.setState({ chipsSet3: [] });
        };

        // this.deleteCategory4 = () => {
        //     this.setState({ chipsSet4: [] });
        // };
    }

    render() {
        const {
            chipsSet1,
            chipsSet2,
            chipsSet3,
            chipsSet4,
            chipsSet5,
            chipsSet6
        } = this.state;
        // Regular space: &nbsp;
        // Two spaces gap: &ensp;
        // Four spaces gap: &emsp;
        return (
            <React.Fragment>
                <br /> <br />
                <div class="box myTextColor">
                    <span><b>Option 1</b></span><br />
                    <span><small>With each checkbox click, a new chip/icon is added.
                        This will help to visually confirm that the click action has resulted into a new chip.
                        Selecting the Resource type checkbox would show the same chip as selecting all the individual Operations under a Resource type.</small>
                    </span>
                </div>
                <div class="box myTextColor">
                    <span><b>Option 1.a</b></span><br />
                </div>
                &emsp;
                <ChipGroup
                    categoryName="Resource type permission"
                    isClosable
                    onClick={this.deleteCategory1}
                >
                    {chipsSet1.map((currentChip) => (
                        <Chip
                            key={currentChip}
                            onClick={() => this.deleteItem1(currentChip)}
                        >
                            {currentChip}
                        </Chip>
                    ))}
                </ChipGroup>
                <br /> <br />
                <div class="box myTextColor">
                    <span><b>Option 1.b (smaller labels)</b></span><br />
                </div>
                &emsp;
                <ChipGroup
                    categoryName="Resource type permission"
                    isClosable
                    onClick={this.deleteCategory2}
                >
                    {chipsSet2.map((currentChip) => (
                        <Chip
                            key={currentChip}
                            onClick={() => this.deleteItem2(currentChip)}
                        >
                            {currentChip}
                        </Chip>
                    ))}
                </ChipGroup>
                <br /> <br />
                <br />
                <div class="box myTextColor">
                    <span><b>Option 2</b></span><br />
                    <span><small>Operations for each Resource type would be grouped.</small>
                    </span>
                </div>
                <div class="box myTextColor">
                    <span><b>Option 2.a</b></span><br />
                </div>
                {/* &emsp;
                <ChipGroup
                    categoryName="Resource type permission"
                    isClosable
                    onClick={this.deleteCategory3}
                >
                    {chipsSet3.map((currentChip) => (
                        <Chip
                            key={currentChip}
                            onClick={() => this.deleteItem3(currentChip)}
                        >
                            {currentChip}
                        </Chip>
                    ))}
                </ChipGroup>
                <br /> <br />
                <br /> */}
                &emsp;
                <ChipGroup
                    categoryName="Resource type permission"
                // insert logic to close this main chip when all child chips are closed
                >
                    <Chip className="custom-c-chip" isReadOnly>
                        <ChipGroup className="foo"
                            // class="pf-c-chip-group pf-c-chip-group__close bkg-color"
                            categoryName={<div class="row">
                                &nbsp;
                                {/* &ensp; */}
                                <div class="child">
                                    <span class="pf-c-label mas-m-solid pf-m-blue smaller-label new">
                                        <span class="pf-c-label__content">
                                            T
                                        </span>
                                    </span>
                                </div>
                                <div class="child">
                                </div>
                            </div>}>
                            {chipsSet4.map((currentChip) => (
                                <Chip
                                    key={currentChip}
                                    onClick={() => this.deleteItem4(currentChip)}
                                >
                                    {currentChip}
                                </Chip>
                            ))}
                        </ChipGroup>
                    </Chip>
                    <ChipGroup
                        categoryName={<div class="row">
                            &nbsp;
                            {/* &ensp; */}
                            <div class="child">
                                <span class="pf-c-label mas-m-solid pf-m-grey smaller-label new">
                                    <span class="pf-c-label__content">
                                        KI
                                    </span>
                                </span>
                            </div>
                            <div class="child">
                            </div>
                        </div>}>
                        {chipsSet5.map((currentChip) => (
                            <Chip
                                key={currentChip}
                                onClick={() => this.deleteItem5(currentChip)}
                            >
                                {currentChip}
                            </Chip>
                        ))}
                    </ChipGroup>
                    <ChipGroup
                        categoryName={<div class="row">
                            &nbsp;
                            {/* &ensp; */}
                            <div class="child">
                                <span class="pf-c-label mas-m-solid pf-m-green smaller-label new">
                                    <span class="pf-c-label__content">
                                        G
                                    </span>
                                </span>
                            </div>
                            <div class="child">
                            </div>
                        </div>}>
                        {chipsSet6.map((currentChip) => (
                            <Chip
                                key={currentChip}
                                onClick={() => this.deleteItem6(currentChip)}
                            >
                                {currentChip}
                            </Chip>
                        ))}
                    </ChipGroup>
                </ChipGroup>
            </React.Fragment >
        );
    }
}

export default CategoryChipGroupRemovable;
