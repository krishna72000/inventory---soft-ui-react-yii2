import { Grid } from "@mui/material"

const smartForm = function () {
    const HourModel = {
        stime: null,
        etime: null,
        type: null
    };
    const shiftModel = {
        name: null,
        plan: null,
        hours: [HourModel]
    }

    const initShift = {
        name: null,
        bottletime: null,
        associate: null,
        shifts: [shiftModel]
    }

    function addShift() {
        initShift.shifts.push(shiftModel);
    }

    function addHrours() {
        initShift.shifts.push(HourModel);
    }

    function updateInit(e) {
        initShift[e.target.name] = e.target.name;
    }

    const shiftList = initShift.shifts.map(shift => {
        return (
            <Grid container spacing={2} direction="row">
                <Grid item xs={12} lg={4}>
                    <Grid direction="row">
                        <Grid item xs={12} lg={4}>
                            <input name="name" value={initShift.name} onChange={updateInit} />
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <input name="bottletime" value={initShift.bottletime} onChange={updateInit} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <button onClick={addHrours} />
                </Grid>
            </Grid>
        );
    })

    return (
        <>
            <SuiBox py={3}>
                <Grid container spacing={2} direction="row">
                    <Grid item xs={12} lg={4}>
                        <input name="name" value={initShift.name} onChange={updateInit} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <input name="bottletime" value={initShift.bottletime} onChange={updateInit} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <input name="associate" value={initShift.associate} onChange={updateInit} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} direction="row">
                    <Grid item xs={12} lg={4}>
                        <button onClick={addShift} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} direction="row">
                    <Grid item xs={12} lg={4}>
                        <input name="name" value={initShift.name} onChange={updateInit} />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <input name="bottletime" value={initShift.bottletime} onChange={updateInit} />
                    </Grid>
                </Grid>
            </SuiBox>
        </>
    )
}